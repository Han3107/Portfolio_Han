import Image from "next/image";

export default function Logo({ size = 50 }: { size?: number }) {
  return (
    <Image
      src="/logo.png"
      alt="Han Han logo"
      width={size}
      height={size}
      priority
      unoptimized
      className="block object-contain"
      style={{ width: size, height: size }}
    />
  );
}
