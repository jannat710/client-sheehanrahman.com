import ProfileImage from "./components/ProfileImage/ProfileImage"
import ProfileInfo from "./components/ProfileInfo/ProfileInfo"


function LeftColumn() {
  return (
    <div className="grid grid-rows-[20%,80%] md:grid-rows-[60%,40%] h-screen">
      <ProfileImage />
      <ProfileInfo />
    </div>
  )
}

export default LeftColumn