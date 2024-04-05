import NextImage from "next/image";

export function Image({
  src,
  alt: originalAlt,
  width,
  height,
  unoptimized,
  priority,
  className,
}: {
  src?: string;
  alt?: string;
  width?: string | number | undefined;
  height?: string | number | undefined;
  unoptimized?: boolean;
  priority?: boolean;
  className?: string;
}) {
  if (typeof src !== "string") {
    return null;
  }
  if (typeof width === "string") {
    width = parseInt(width);
  }
  if (typeof height === "string") {
    height = parseInt(height);
  }
  return (
    <NextImage
      src={src}
      alt={originalAlt || ""}
      width={width || undefined}
      height={height || undefined}
      unoptimized={unoptimized}
      priority={priority}
      className={className}
    />
  );
}
