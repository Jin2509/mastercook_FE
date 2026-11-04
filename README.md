# MasterCook VN

Website dịch vụ nấu tiệc lưu động. Dự án đang ở giai đoạn đã setup môi trường, chưa triển khai giao diện.

## Bắt đầu

Cần Node.js 24 trở lên và pnpm (`corepack enable`).

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Mở <http://localhost:3000>.

## Lệnh

| Lệnh              | Tác dụng                                    |
| ----------------- | ------------------------------------------- |
| `pnpm dev`        | Chạy môi trường phát triển                  |
| `pnpm build`      | Build production                            |
| `pnpm start`      | Chạy bản đã build                           |
| `pnpm check`      | Chạy lint, kiểm tra format, typecheck, test |
| `pnpm format`     | Format toàn bộ code                         |
| `pnpm test:watch` | Chạy test ở chế độ theo dõi                 |

Git hook `pre-commit` tự chạy ESLint và Prettier trên các file đã stage.

## Công nghệ

Next.js 16 (App Router, Turbopack, Cache Components), React 19, TypeScript, Tailwind CSS 4, Base UI, Motion, React Hook Form với Zod, Phosphor Icons, Simple Icons, Vitest với Testing Library.

## Cấu trúc

```text
design/               File thiết kế UI
docs/                 Quy tắc thiết kế và hướng dẫn triển khai
src/
  app/                Route, layout, trang lỗi, SEO, /api/health
  app/globals.css     Design token
  components/icons/   Bộ icon dùng chung
  components/ui/      Thành phần cơ bản (nút, ô nhập...)
  components/layout/  Header, footer...
  components/sections/ Các khối nội dung của trang
  config/site.ts      Thông tin website
  hooks/              React hook dùng chung
  lib/                env, tiện ích
  types/              Kiểu dữ liệu dùng chung
```

## Tài liệu

- [Quy tắc thiết kế](docs/DESIGN_GUIDELINES.md): đọc trước khi làm giao diện.
- [Triển khai](docs/DEPLOYMENT.md): Vercel, Docker, CI.
