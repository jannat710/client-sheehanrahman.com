import Image from "next/image";

function AppCard() {
  const data = [
    {
      id: 1,
      name: "Fashion House",
      image: "https://i.postimg.cc/jd5Rswx4/fashion-house.png",
      details: "About your daily fashion",
    },
    {
      id: 2,
      name: "Foodies",
      image: "https://i.postimg.cc/mkdRYRw9/foodies.png",
      details: "About food delivery app",
    },
    {
      id: 3,
      name: "Plant Shop",
      image: "https://i.postimg.cc/wxF68cpB/plant-shop.png",
      details: "About plant selling shop",
    },
  ];

  return (
    <div className="pt-10">
      {data.map((item, index) => (
        <div key={item.id}>
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 ${
              index % 2 === 0 ? "" : "md:grid-cols-2 md:flex-row-reverse"
            }`}
          >
            {index % 2 === 0 ? (
              <>
                <figure>
                  <Image
                    alt="made-apps"
                    className="object-cover w-full max-h-96"
                    src={item.image}
                    height={450}
                    width={400}
                  />
                </figure>
                <div className="opacity-70 text-primary place-self-center">
                  <p className="underline font-bold text-2xl">0{index + 1}</p>
                  <p className="droid-lover-font text-white text-5xl pt-7 pb-1">
                    {item.name}
                  </p>
                  <p>{item.details}</p>
                </div>
              </>
            ) : (
              <>
                <div className="opacity-70 text-primary place-self-center">
                  <p className="underline font-bold text-2xl">0{index + 1}</p>
                  <p className="droid-lover-font text-white text-5xl pt-7 pb-1">
                    {item.name}
                  </p>
                  <p>{item.details}</p>
                </div>
                <figure>
                  <Image
                    alt="made-apps"
                    className="object-cover w-full max-h-96"
                    src={item.image}
                    height={450}
                    width={400}
                  />
                </figure>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AppCard;
