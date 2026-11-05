"use client";

import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/Button";

export function SubmitButton({ children }: { children: string }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="primary" disabled={pending}>
      {children}
    </Button>
  );
}
