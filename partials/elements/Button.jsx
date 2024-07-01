import Image from "next/image";

function Button({ text, image, onClick, primary, className, type, icon }) {
  return (
    <button
      type={type}
      className={`rounded-md ${
        image ? "h-10 w-10 p-2" : " py-3 px-2 md:px-8"
      } duration-300 uppercase  border-primary border-2 ${
        primary
          ? "bg-secondary bg-primary hover:bg-transparent hover:text-white font-semibold "
          : "bg-transparent ring-primary text-primary hover:text-white hover:bg-primary font-semibold"
      }  ${className}`}
      onClick={onClick}
    >
      <div className="flex justify-center items-center gap-2">
        {image ? <Image src={image} alt="" /> : text}
        {icon && <span className="mr-2">{icon}</span>}
      </div>
    </button>
  );
}

export default Button;
