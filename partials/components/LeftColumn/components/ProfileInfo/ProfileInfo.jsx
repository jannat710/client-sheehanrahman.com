import ContactInfo from "./components/ContactInfo";
import CopyRight from "./components/CopyRight";
import ProfileInfoWrapper from "./components/ProfileInfoWrapper";

function ProfileInfo() {
  return (
    <ProfileInfoWrapper>
      <ContactInfo />
      <div className="self-end flex justify-center">
        <CopyRight />
      </div>
    </ProfileInfoWrapper>
  );
}

export default ProfileInfo;
