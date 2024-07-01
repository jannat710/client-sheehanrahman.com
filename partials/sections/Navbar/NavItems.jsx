import NavLink from "./NavLink";

function NavItems({ closeMenu }) {
  return (
    <ul className="text-5xl text-center *:py-4 ">
      <NavLink href="/" onClick={closeMenu}>
        Home
      </NavLink>

      <NavLink href="/accomplishment" onClick={closeMenu}>
        Accomplishment
      </NavLink>

      <NavLink href="/made-apps" onClick={closeMenu}>
        Apps I Made
      </NavLink>

      <NavLink href="/story" onClick={closeMenu}>
        Story
      </NavLink>

      <NavLink href="/videos" onClick={closeMenu}>
        Videos
      </NavLink>

      <NavLink href="/contact-us" onClick={closeMenu}>
        Contact
      </NavLink>
    </ul>
  );
}

export default NavItems;
