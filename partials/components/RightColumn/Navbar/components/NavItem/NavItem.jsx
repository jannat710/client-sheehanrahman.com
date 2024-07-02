import Headline from "@/partials/elements/Headline"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


function NavItem() {
    const pathname = usePathname();
    const [headlineText, setHeadlineText] = useState("");
  
    useEffect(() => {
      switch (pathname) {
        case "/":
          setHeadlineText("");
          break;
        case "/made-apps":
          setHeadlineText("Apps I Made");
          break;
        case "/stories":
          setHeadlineText("Story");
          break;
        case "/videos":
          setHeadlineText("Video's");
          break;
          case "/contactUs":
          setHeadlineText("Contact");
          break;
        default:
          setHeadlineText("NavBar");
      }
    }, [pathname]);
  return (
    
    <Headline text={headlineText} extraClass={"droid-lover-font text-2xl md:text-5xl"} />
  )
}

export default NavItem