import Image from "next/image";

function ItemCard() {
  const data = [
    {
      id: 1,
      image: "https://i.postimg.cc/bY91zF0p/image-17.png",
      detail:
        "Elegant watch with leather strap and Roman numerals, silver dial.",
    },
    {
      id: 2,
      image: "https://i.postimg.cc/RhdtXNCN/image-18.png",
      detail:
        "Modern digital wristwatch with black strap, square face, and LED display.",
    },
    {
      id: 3,
      image: "https://i.postimg.cc/2yrvQ4Ds/image-19.png",
      detail:
        "Classic analog watch with stainless steel strap and date window on dial.",
    },
    {
      id: 4,
      image: "https://i.postimg.cc/JnbZHp93/image-20.png",
      detail:
        "Sporty chronograph watch with silicone strap and multifunction dial.",
    },
    {
      id: 5,
      image: "https://i.postimg.cc/VN0jmfgV/image-22.png",
      detail:
        "Luxury automatic watch with gold-plated case and exhibition caseback.",
    },
    {
      id: 6,
      image: "https://i.postimg.cc/cHqfJp54/image-23.png",
      detail:
        "Durable dive watch with rotating bezel, luminous markers, and rubber strap.",
    },
    {
      id: 7,
      image: "https://i.postimg.cc/K8Hn6kPT/image-24.png",
      detail:
        "Fashionable smartwatch with touchscreen display and interchangeable bands.",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 place-content-center gap-5">
      {data.map((item) => (
        <div key={item.id}>
          <div className="hover:text-primary max-w-xl">
            <figure className=" pb-5">
              <Image alt="contact" src={item.image} height={450} width={400} />
            </figure>
            <p className="pb-14 opacity-70">{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemCard;
