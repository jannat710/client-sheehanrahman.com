import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

function ContactCard() {
  const data = [
    {
      id: 1,
      icon: <FaFacebook />,
      name: "facebook.com/ sheehan_rahman",
    },
    {
      id: 2,
      icon: <FaInstagram />,
      name: "instagram.com/ sheehan_rahman",
    },
    {
      id: 3,
      icon: <FaLinkedin />,
      name: "linkedin.com/ sheehan_rahman",
    },
    {
      id: 4,
      icon: <FaGithub />,
      name: "github.com/ sheehan_rahman",
    },
    {
      id: 5,
      icon: <FaYoutube />,
      name: "youtube.com/ sheehan_rahman",
    },
    {
      id: 6,
      icon: <FaWhatsapp />,
      name: "whatsapp.com/ sheehan_rahman",
    },
  ];
  return (
    <div className="grid md:grid-cols-3 place-content-center gap-20 h-screen">
      {data.map((item) => (
        <div key={item.id}>
          <div className="hover:text-primary text-center">
            <figure className="max-w-xl flex justify-center pb-4">
              <div className="w-20 h-20 flex items-center justify-center text-5xl">
                {item.icon}
              </div>
            </figure>
            <h3 className="text-sm">{item.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactCard;
