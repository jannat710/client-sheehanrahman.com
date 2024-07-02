"use client"
import FlexSection from "@/partials/sections/Section/FlexSection";
import SectionWrapper from "@/partials/sections/Section/SectionWrapper";
import NavEnd from "./components/NavEnd/NavEnd";
import NavItem from "./components/NavItem/NavItem";

function Navbar() {
    return (
        <SectionWrapper>
            <FlexSection extraClass={"justify-between items-center"}>
                <NavItem />
                <NavEnd />
            </FlexSection>
        </SectionWrapper>
    );
}

export default Navbar;
