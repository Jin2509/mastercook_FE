import type { SVGProps } from "react";
import {
  siFacebook,
  siGooglemaps,
  siMessenger,
  siTiktok,
  siZalo,
} from "simple-icons";

const brands = {
  facebook: siFacebook,
  googlemaps: siGooglemaps,
  messenger: siMessenger,
  tiktok: siTiktok,
  zalo: siZalo,
};

export type BrandName = keyof typeof brands;

type BrandIconProps = Omit<SVGProps<SVGSVGElement>, "children"> & {
  name: BrandName;
  size?: number;
  /** Use the brand's own colour instead of inheriting the text colour. */
  brandColor?: boolean;
};

export function BrandIcon({
  name,
  size = 24,
  brandColor = false,
  ...props
}: BrandIconProps) {
  const brand = brands[name];

  return (
    <svg
      role="img"
      aria-label={brand.title}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={brandColor ? `#${brand.hex}` : "currentColor"}
      {...props}
    >
      <path d={brand.path} />
    </svg>
  );
}
