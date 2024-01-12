"use client";
import { Icon } from "@iconify/react/dist/iconify.js";

interface Props {
  icon: string;
  size: number;
}
export default function Iconify({ icon = "iconamoon:home-duotone", size = 25 }: Props) {
  return <Icon icon={icon} width={size} height={size} />;
}
