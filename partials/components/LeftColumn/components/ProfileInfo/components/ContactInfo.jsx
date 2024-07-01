"use client";
import Button from "@/partials/elements/Button";
import Description from "@/partials/elements/Description";
import Headline from "@/partials/elements/Headline";
import Modal from "@/partials/elements/Modal";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SocialLinks from "./SocialLinks";

function ContactInfo() {
  const pathname = usePathname();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleButtonClick = () => {
    setIsModalVisible(true);
    console.log("bbbbbbbbb");
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="*:opacity-70">
      <div className="hidden sm:block">
        <Headline text={"Phone"} extraClass={"md:text-sm"} />
        <Description text={"0123456789"} extraClass={"pb-3 md:text-base"} />
        <Headline text={"Email"} extraClass={"md:text-sm"} />
        <Description
          text={"sheen421@gmail.com"}
          extraClass={"pb-8 md:text-base"}
        />
      </div>
      <SocialLinks />
      {pathname !== "/" && (
        <>
          <Button
            text="Book A Free Consultation"
            className="droid-lover-font mt-5 text-upright"
            onClick={handleButtonClick}
          />
          {isModalVisible && <Modal onClose={handleCloseModal} />}
        </>
      )}
    </div>
  );
}

export default ContactInfo;
