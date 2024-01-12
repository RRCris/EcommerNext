import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import Iconify from "../Iconify/Iconify";

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
        <ButtonNav link={obj.link} name={obj.name} key={k} icon={obj.icon} />
      ))}
    </nav>
  );
}

function ButtonNav({ name, link, icon = "" }: { name: string; link?: string; icon?: string }) {
  return (
    <Link href={link as Url} className="bg-transparent hover:bg-slate-500 hover:bg-opacity-25 p-2 rounded cursor-pointer flex gap-2 items-center">
      <Iconify icon={icon} size={20} />
      {name}
    </Link>
  );
}
