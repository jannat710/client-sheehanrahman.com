import Description from "@/partials/elements/Description";
import Headline from "@/partials/elements/Headline";
import { FaRegDotCircle } from "react-icons/fa";
import Wrapper from "../Wrapper";
import TimeLineImages from "./TimeLineImages";
function TimeLine({ selectedId }) {
  const timelineData = [
    {
      id: 1,
      dateRange: "2020 - Present",
      title: "Meta",
      subtitle: "I really don’t Know",
      description:
        "Lorem ipsum dolor sit amet consectetur. Condimentum duis arcu in quam nunc rhoncus lacus habitant. Egestas dignissim ut blandit sed donec. Nulla cras est lobortis elementum nulla tristique iaculis ultrices sed. Maecenas nisl id etiam nullam. Dui vitae neque porttitor sit est vitae est. Auctor interdum dignissim massa non sit tempus donec. Sem aliquam cursus senectus facilisi. Faucibus egestas ac facilisis faucibus mattis netus a facilisi. Nulla placerat interdum ultrices morbi eu eget",
      images: [
        "https://i.postimg.cc/W3fn2C9d/Rectangle-79-1.png",
        "https://i.postimg.cc/nVgy2PHV/Rectangle-81-1.png",
        "https://i.postimg.cc/brsmkpG0/Rectangle-82-1.png",
      ],
    },
    {
      id: 2,
      dateRange: "2021 - Present",
      title: "Meta",
      subtitle: "I really don’t Know",
      description:
        "Lorem ipsum dolor sit amet consectetur. Condimentum duis arcu in quam nunc rhoncus lacus habitant. Egestas dignissim ut blandit sed donec. Nulla cras est lobortis elementum nulla tristique iaculis ultrices sed. Maecenas nisl id etiam nullam. Dui vitae neque porttitor sit est vitae est. Auctor interdum dignissim massa non sit tempus donec. Sem aliquam cursus senectus facilisi. Faucibus egestas ac facilisis faucibus mattis netus a facilisi. Nulla placerat interdum ultrices morbi eu eget",
      images: [
        "https://i.postimg.cc/W3fn2C9d/Rectangle-79-1.png",
        "https://i.postimg.cc/nVgy2PHV/Rectangle-81-1.png",
        "https://i.postimg.cc/brsmkpG0/Rectangle-82-1.png",
      ],
    },
  ];
  const filteredData = selectedId
    ? timelineData.filter((item) => item.id === selectedId)
    : timelineData;
  return (
    <Wrapper>
      {timelineData.map((item) => (
        <div className="relative" key={item.id}>
          <div className="md:flex items-center md:space-x-4 mb-3">
            <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
              <div className="flex items-center justify-center w-10 h-10 rounded-full shadow md:order-1">
                <FaRegDotCircle />
              </div>
              <Description
                text={item.dateRange}
                extraClass="md:text-sm md:w-28 opacity-70"
              />
            </div>

            <Headline
              text={item.title}
              extraClass="ml-14 md:text-base droid-lover-font"
            />
          </div>

          <Headline
            text={item.subtitle}
            extraClass="ml-14 md:ml-44 md:text-lg droid-lover-font"
          />
          <Description
            text={item.description}
            extraClass={"ml-14 md:ml-44 opacity-70 pt-4 pb-10 md:text-base"}
          />
          <div className="ml-14 md:ml-44 flex gap-5">
            {item.images.map((image, index) => (
              <TimeLineImages key={index} image={image} />
            ))}
          </div>
        </div>
      ))}
    </Wrapper>
  );
}

export default TimeLine;
