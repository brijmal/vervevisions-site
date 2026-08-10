import Image from "next/image";
import { MTH_LOGO_PATH } from "@/lib/mth/constants";

type MTHLogoProps = {
  size?: number;
  className?: string;
};

export default function MTHLogo({ size = 80, className = "" }: MTHLogoProps) {
  return (
    <Image
      src={MTH_LOGO_PATH}
      alt="Main Theek Hoon app icon"
      width={size}
      height={size}
      className={`rounded-2xl shadow-md ${className}`}
    />
  );
}
