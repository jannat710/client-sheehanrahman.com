import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

function useContactUsHook() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const fetchedData = [
        {
          id: 1,
          icon: <FaFacebook />,
          name: "facebook.com/sheehan_rahman",
        },
        {
          id: 2,
          icon: <FaInstagram />,
          name: "instagram.com/sheehan_rahman",
        },
        {
          id: 3,
          icon: <FaLinkedin />,
          name: "linkedin.com/sheehan_rahman",
        },
        {
          id: 4,
          icon: <FaGithub />,
          name: "github.com/sheehan_rahman",
        },
        {
          id: 5,
          icon: <FaYoutube />,
          name: "youtube.com/sheehan_rahman",
        },
        {
          id: 6,
          icon: <FaWhatsapp />,
          name: "whatsapp.com/sheehan_rahman",
        },
      ];
      setData(fetchedData);
    };

    fetchData();
  }, []);

  return data;
}

export default useContactUsHook;

