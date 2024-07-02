import Headline from "@/partials/elements/Headline";
import SectionWrapper from "@/partials/sections/Section/SectionWrapper";
import SwiperSlider from "@/partials/sections/SwiperSlider/SwiperSlider";
import ItemCard from "./components/ItemCard/ItemCard";

function page() {
  const buttons = [
    "All",
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6",
    "Category 7",
    "Category 8",
    "Category 9",
    "Category 10",
    "Category 11",
    "Category 12",
    "Category 13",
    "Category 14",
  ];
  return (
    <SectionWrapper extraClass={"pt-0 pb-0"}>
      <SwiperSlider buttons={buttons} slidesPerView={7} />
      <ItemCard />
    </SectionWrapper>
  );
}

export default page;
