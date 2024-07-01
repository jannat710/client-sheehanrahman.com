import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";

function SocialLinks() {
  return (
    <div className="flex justify-center md:justify-start">
      <div className="grid grid-cols-1 md:grid-cols-4 *:text-3xl gap-6">
        <FaGithub className="hover:text-primary" />
        <FaFacebookF className="hover:text-primary" />
        <SlSocialInstagram className="hover:text-primary" />
        <FaLinkedinIn className="hover:text-primary" />
      </div>
    </div>
  );
}

export default SocialLinks;
