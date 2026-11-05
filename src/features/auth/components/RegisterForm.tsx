"use client";

import { useActionState } from "react";

import { Alert } from "@/components/ui/Alert";
import { TextField } from "@/components/ui/TextField";

import { register } from "@/features/auth/actions";

import { SubmitButton } from "./SubmitButton";

export function RegisterForm() {
  const [state, action] = useActionState(register, {});

  return (
    <form action={action} className="contents">
      <TextField
        id="register-name"
        name="name"
        label="Họ tên"
        defaultValue="Trần Thị Mai"
      />
      <TextField
        id="register-phone"
        name="phone"
        label="Số điện thoại"
        type="tel"
        defaultValue="0903 123 456"
        hint="Nếu tư vấn đã đặt hộ bằng số này, đơn của bạn hiện ngay sau khi đăng ký."
      />
      <TextField
        id="register-password"
        name="password"
        label="Mật khẩu"
        type="password"
        defaultValue="matkhaumau"
      />
      {state.error ? <Alert tone="error">{state.error}</Alert> : null}
      <SubmitButton>Tạo tài khoản</SubmitButton>
    </form>
  );
}
