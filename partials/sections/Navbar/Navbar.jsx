import Image from "next/image";

function Navbar() {
  return (
    <figure className="">
      <Image
        src="/assets/Home/menu.png"
        alt="menu-image"
        height={44}
        width={44}
      />
    </figure>
  );
}

export default Navbar;
