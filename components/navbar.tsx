import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { MenuLinkContent } from "../types";
import { Brand } from "./brand";

interface NavbarProps {
  links: MenuLinkContent[];
}

export function Navbar({ links, ...props }: NavbarProps) {
  return (
    <header
      className="static top-0 z-50 flex-shrink-0 py-4 bg-white md:sticky"
      {...props}
    >
      <div className="container flex flex-col items-start justify-between px-6 mx-auto md:flex-row md:items-center">
        <Link href="/" passHref className="text-lg font-bold">
          RowScript
        </Link>
        {links ? <Menu items={links} /> : null}
        <Brand></Brand>
      </div>
    </header>
  );
}

function Menu({ items }: { items: MenuLinkContent[] }) {
  return (
    <ul
      className="grid grid-flow-col gap-4 mx-auto mt-6 md:mt-0 auto-cols-auto md:auto-rows-auto md:gap-8 lg:gap-12"
      data-cy="navbar-menu"
    >
      {items.map((item) => (
        <MenuLink link={item} key={item.id} />
      ))}
    </ul>
  );
}

function MenuLink({ link }: { link: MenuLinkContent }) {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={link.url}
        passHref
        className={classNames(
          "py-4 hover:underline text-sm md:text-base",
          link.url === pathname ? "font-semibold" : "font-normal"
        )}
      >
        {link.title}
      </Link>
    </li>
  );
}
