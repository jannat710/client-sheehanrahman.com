
import SwiperSlider from "@/partials/sections/SwiperSlider/SwiperSlider";
import TimeLine from "./components/Timeline/TimeLine";
import SectionWrapper from "@/partials/sections/Section/SectionWrapper";

function page() {
  const buttons = [
    "All",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
  ];
  return (
    <SectionWrapper extraClass={"pt-0 pb-0"}>
      <SwiperSlider buttons={buttons} />
      <TimeLine />
    </SectionWrapper>
  )
}

export default page