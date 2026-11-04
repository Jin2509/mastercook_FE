"use client";

import { useEffect } from "react";

export default function Error({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-1 flex-col items-start justify-center gap-3 px-6">
      <h1 className="font-display text-heading">Đã có lỗi xảy ra</h1>
      <p className="text-muted">Bạn vui lòng thử lại sau ít phút.</p>
      <button
        type="button"
        onClick={retry}
        className="text-accent underline underline-offset-4"
      >
        Thử lại
      </button>
    </main>
  );
}
