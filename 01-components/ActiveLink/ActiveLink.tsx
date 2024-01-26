"use client";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import Iconify from "../Iconify/Iconify";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

export default function ActiveLink({ name, link, icon = "" }: { name: string; link?: string; icon?: string }) {
  const pathName = usePathname();
  return (
    <Link href={link as Url} className={`${style.link} ${pathName === link && style["active-link"]}`}>
      <Iconify icon={icon} size={20} />
      {name}
    </Link>
  );
}
