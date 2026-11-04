# Quy tắc thiết kế

Mục tiêu: giao diện hiện đại, có cá tính riêng của một dịch vụ nấu tiệc Việt Nam, và được căn chỉnh theo file design. Không dùng bố cục mẫu hay giá trị do AI tự đoán.

## Căn chỉnh

- File design trong `design/` là nguồn chuẩn. Khoảng cách, cỡ chữ và lưới lấy từ design, không ước lượng bằng mắt hay để AI tự đoán.
- Khi design có giá trị lặp lại, đưa vào token trong `src/app/globals.css` thay vì viết giá trị tuỳ ý như `mt-[37px]`.
- Kiểm tra bằng cách đặt ảnh chụp trang cạnh design ở các độ rộng 375, 768, 1280 và 1440px. Người làm phải tự duyệt, không dừng ở việc build qua.

## Những dấu hiệu "giao diện AI" cần tránh

- Gradient tím/xanh, chữ gradient, nền blob mờ, hiệu ứng kính.
- Hero căn giữa kèm huy hiệu nhỏ phía trên tiêu đề và hai nút cạnh nhau.
- Hàng ba thẻ giống hệt nhau, mỗi thẻ gồm icon trong ô bo tròn, tiêu đề và hai dòng mô tả.
- Mọi thứ cùng bo góc lớn, cùng đổ bóng, cùng khoảng cách.
- Emoji thay icon; viền màu một bên ở thẻ; hiệu ứng fade-in cho mọi section khi cuộn.
- Câu chữ sáo rỗng ("Nâng tầm trải nghiệm", "Giải pháp toàn diện"). Hãy viết thông tin cụ thể: thực đơn, giá, số bàn, khu vực phục vụ.

## Nên làm

- Ảnh món ăn và ảnh tiệc thật là chất liệu chính. Ảnh stock chỉ dùng tạm, không dùng ảnh AI tạo cho món ăn.
- Tạo nhịp bằng độ tương phản về cỡ chữ và mật độ. Các section không cần có cùng bố cục.
- Bố cục bất đối xứng khi nội dung phù hợp, ví dụ thực đơn trình bày như một tờ menu thật.
- Hiệu ứng ít và có lý do, ví dụ phản hồi khi đặt tiệc. Luôn tôn trọng `prefers-reduced-motion`.

## Hệ thống đã cài

| Thành phần  | Lựa chọn                                        | Ghi chú                                                                                                         |
| ----------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Màu         | Token trong `globals.css`                       | Đã xoá bảng màu mặc định của Tailwind, nên `bg-indigo-500` không còn tồn tại. Giá trị hiện tại chỉ là tạm thời. |
| Font        | Be Vietnam Pro (nội dung), Newsreader (tiêu đề) | Đều có đủ dấu tiếng Việt. Đổi trong `src/app/layout.tsx` khi design chốt font.                                  |
| Icon        | Phosphor qua `@/components/icons`               | ESLint chặn import trực tiếp và chặn Lucide, react-icons.                                                       |
| Logo MXH    | `<BrandIcon>` (Simple Icons)                    | Zalo, Facebook, Messenger, TikTok, Google Maps.                                                                 |
| Primitive   | Base UI (`@base-ui/react`)                      | Không kèm style, tự tạo kiểu trong `src/components/ui`.                                                         |
| Biến thể    | `cva` và `cn()`                                 | `cn()` đã biết các cỡ chữ tuỳ chỉnh. Khi thêm cỡ mới, cập nhật cả `src/lib/utils.ts`.                           |
| Chuyển động | Motion (`motion`)                               | Chỉ import trong Client Component.                                                                              |

## Thêm icon

Thêm một dòng vào `src/components/icons/index.ts`, rồi dùng:

```tsx
import { ChefHat } from "@/components/icons";

<ChefHat size={24} weight="duotone" />;
```

Tra tên icon tại [phosphoricons.com](https://phosphoricons.com). Nên chọn một `weight` chính cho toàn site.
