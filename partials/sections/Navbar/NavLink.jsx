import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children, onClick }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <li className="py-4">
      <Link
        href={href}
        onClick={onClick}
        className={`droid-lover-font hover:text-primary ${
          isActive ? "text-primary" : ""
        }`}
      >
        {children}
      </Link>
    </li>
  );
}

export default NavLink;
