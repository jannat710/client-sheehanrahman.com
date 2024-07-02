import Image from "next/image";

function TimeLineImages({ image }) {
  return (
    <figure
      className="h-[90px] md:h-[
184px]"
    >
      <Image src={image} alt="timeline" height={150} width={100} />
    </figure>
  );
}

export default TimeLineImages;
