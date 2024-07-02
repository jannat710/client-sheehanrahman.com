import SectionWrapper from "@/partials/sections/Section/SectionWrapper"
import ContactCard from "./components/ContactCard"

function page() {
  return (
    <SectionWrapper extraClass={"pt-0 pb-0"}>
      <ContactCard />
    </SectionWrapper>
  )
}

export default page