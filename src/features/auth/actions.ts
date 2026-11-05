"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { ROUTES } from "@/constants/routes";
import { encodeSession, SESSION_COOKIE, type Session } from "@/lib/session";
import { CUSTOMER } from "@/mocks/contracts";
import { STAFF_ACCOUNTS } from "@/mocks/people";

import { loginSchema, registerSchema } from "./schemas";

export type AuthFormState = { error?: string };

const INVALID_CREDENTIALS = "Số điện thoại hoặc mật khẩu không đúng.";

const normalizePhone = (phone: string) => phone.replaceAll(" ", "");

async function writeSession(session: Session) {
  const store = await cookies();
  store.set(SESSION_COOKIE, encodeSession(session), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
}

function safeNext(value: FormDataEntryValue | null) {
  return typeof value === "string" &&
    value.startsWith("/") &&
    !value.startsWith("//")
    ? value
    : null;
}

function landingPage(session: Session, next: string | null) {
  const nextIsWorkspace = next?.startsWith(ROUTES.workspace) ?? false;
  if (session.kind === "staff") {
    return nextIsWorkspace ? (next as string) : ROUTES.workspace;
  }
  return next && !nextIsWorkspace ? next : ROUTES.account;
}

function sessionForPhone(phone: string): Session | null {
  const normalized = normalizePhone(phone);
  const staff = STAFF_ACCOUNTS.find(
    (account) => normalizePhone(account.phone) === normalized,
  );
  if (staff && !staff.active) return null;
  return staff
    ? { kind: "staff", name: staff.name, roles: staff.roles }
    : { kind: "customer", name: CUSTOMER.name, phone };
}

// Placeholder for POST /auth/login: any password passes, the phone picks the account.
export async function login(
  _previous: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const parsed = loginSchema.safeParse({
    phone: formData.get("phone"),
    password: formData.get("password"),
  });
  if (!parsed.success) return { error: INVALID_CREDENTIALS };

  const session = sessionForPhone(parsed.data.phone);
  if (!session) return { error: INVALID_CREDENTIALS };

  await writeSession(session);
  redirect(landingPage(session, safeNext(formData.get("next"))));
}

export async function signInWithSampleAccount(formData: FormData) {
  const session = sessionForPhone(String(formData.get("phone")));
  if (!session) return;

  await writeSession(session);
  redirect(landingPage(session, safeNext(formData.get("next"))));
}

export async function register(
  _previous: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const parsed = registerSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    password: formData.get("password"),
  });
  if (!parsed.success) return { error: "Vui lòng nhập đủ thông tin." };

  await writeSession({
    kind: "customer",
    name: parsed.data.name,
    phone: parsed.data.phone,
  });
  redirect(ROUTES.account);
}

export async function logout(redirectTo: string) {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
  redirect(redirectTo);
}
