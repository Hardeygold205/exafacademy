"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

interface HoverLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  textColor?: string;
  hoverColor?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function HoverLink({
  href,
  children,
  className,
  onClick,
  textColor = "text-white",
  hoverColor = "text-light",
}: HoverLinkProps) {
  const pathname = usePathname();
  const [pressed, setPressed] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const active = isActive(href);
  const showHoverColor = active || pressed;

  return (
    <Link
      onClick={onClick}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      href={href}
      className={clsx("group inline-block overflow-hidden", className)}>
      <div className="relative overflow-hidden">
        <span className="invisible block">{children}</span>

        <span
          className={clsx(
            "absolute inset-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-full",
            pressed && "-translate-y-full",
            showHoverColor
              ? hoverColor
              : `${textColor} group-hover:${hoverColor}`,
          )}>
          {children}
        </span>

        <span
          className={clsx(
            "absolute inset-0 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0",
            pressed && "translate-y-0",
            hoverColor,
          )}>
          {children}
        </span>
      </div>
    </Link>
  );
}
