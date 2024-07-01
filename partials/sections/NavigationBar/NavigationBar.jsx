import LeftColumn from "@/app/(home)/components/LeftColumn/LeftColumn";
import NavToggle from "../Navbar/NavToggle";

function NavigationBar() {
  return (
    <div className="w-full bg-gray">
      <div className="fixed left-0 top-0 h-screen">
        <LeftColumn />
      </div>

      {/* <NavToggle /> */}
    </div>
  );
}

export default NavigationBar;
