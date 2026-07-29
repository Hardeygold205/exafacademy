import React from "react";
import clsx from "clsx";
import Link from "next/link";

type BaseProps = {
  text: string;
  bg?: string;
  textColor?: string;
  px?: string;
  py?: string;
  className?: string;
};

type LinkButtonProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    type?: never;
    disabled?: never;
  };

type NativeButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

export default function Button({
  text,
  bg = "bg-light",
  textColor = "text-white",
  px = "px-8",
  py = "py-5",
  className,
  ...props
}: ButtonProps) {
  const sharedClasses = clsx(
    "inline-flex items-center uppercase justify-center text-sm",
    "font-semibold",
    "transition-all duration-300 ease-in-out",
    "hover:scale-95 hover:opacity-90",
    "active:scale-90",
    "disabled:cursor-not-allowed disabled:opacity-50",
    bg,
    textColor,
    px,
    py,
    className,
  );

  if ("href" in props && props.href) {
    const { href, onClick, ...anchorProps } = props as LinkButtonProps;
    return (
      <Link
        href={href}
        onClick={onClick}
        className={sharedClasses}
        {...anchorProps}>
        {text}
      </Link>
    );
  }

  const {
    onClick,
    disabled,
    type = "button",
    ...buttonProps
  } = props as NativeButtonProps;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={sharedClasses}
      {...buttonProps}>
      {text}
    </button>
  );
}
