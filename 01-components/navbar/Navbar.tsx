import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import Iconify from "../Iconify/Iconify";
import ActiveLink from "../ActiveLink/ActiveLink";

const NavItems = [
  { name: "Home", link: "/", icon: "iconamoon:home-duotone" },
  { name: "Contact", link: "/contact", icon: "pepicons-print:persons" },
  { name: "Pricing", link: "/pricing", icon: "tdesign:money" },
  { name: "About", link: "/about", icon: "tabler:medal-2" },
];
export default function Navbar() {
  return (
    <nav className="bg-blue-700 bg-opacity-15 p-4 m-4 text-current rounded flex justify-center gap-3">
      {NavItems.map((obj, k) => (
        <ActiveLink link={obj.link} name={obj.name} key={k} icon={obj.icon} />
      ))}
    </nav>
  );
}
