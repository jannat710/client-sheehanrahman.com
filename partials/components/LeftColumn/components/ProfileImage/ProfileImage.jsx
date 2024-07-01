import Image from "next/image";

function ProfileImage() {
  return (
    <figure>
      <Image
        src="/assets/Home/Profile.png"
        alt="profile-image"
        height={450}
        width={400}
        className="h-full w-full"
      />
    </figure>
  );
}

export default ProfileImage;
