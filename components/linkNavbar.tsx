'use client'

import { NavbarItem } from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation"

interface ILink {
  href: string;
  label: string;
}

interface IProps {
  link: ILink;
}

export default function LinkNavbar({ link }: IProps) {
  const pathname = usePathname();

  const isActive = pathname === link.href;

  return (
    <NavbarItem>
      <NextLink
        className={clsx(
          linkStyles({ color: "foreground" }),
          isActive ? "font-medium" : "text-neutral-400",
        )}
        href={link.href}
      >
        {link.label}
      </NextLink>
    </NavbarItem>
  );
}
