import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col justify-center gap-3 px-6">
      <h1 className="font-display text-heading">Không tìm thấy trang</h1>
      <p className="text-muted">
        Trang bạn tìm không tồn tại hoặc đã được chuyển đi.
      </p>
      <Link href="/" className="text-accent underline underline-offset-4">
        Về trang chủ
      </Link>
    </main>
  );
}
