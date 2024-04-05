import Link from "next/link";

export function A({
  children,
  className = "",
  href,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  href?: string;
}) {
  if (!href) {
    return <span>{children}</span>;
  }
  return (
    <Link
      href={href}
      className={`border-b border-gray-300 text-gray-600 transition-[border-color] hover:border-gray-600 dark:border-gray-500 dark:text-white dark:hover:border-white ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
