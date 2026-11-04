import { env } from "@/lib/env";

export const siteConfig = {
  name: "MasterCook VN",
  description:
    "Dịch vụ nấu tiệc lưu động tận nơi cho gia đình, công ty và sự kiện.",
  url: env.NEXT_PUBLIC_SITE_URL,
  locale: "vi_VN",
  themeColor: "#f7f4ee",
} as const;
