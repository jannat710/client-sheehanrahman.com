import { IoCloseSharp } from "react-icons/io5";
import Button from "./Button";
import Headline from "./Headline";
import InputField from "./InputField";

function Modal({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-20 z-99">
      <div className="bg-black rounded-lg p-7">
        <div className="flex justify-end text-end">
          <IoCloseSharp onClick={onClose} className="text-xl text-white" />
        </div>
        <div className="droid-lover-font opacity-70 px-16 pt-16 pb-24">
          <Headline
            text={"REQUEST Free Consultation"}
            extraClass={"text-primary pb-24 md:text-5xl"}
          />
          <div className="space-y-14">
            <div className="flex">
              <label htmlFor="cars">LET me HELP YOU</label>
              <select
                id="cars"
                className="bg-transparent border-b w-full outline-none"
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="flex">
              <label>Full Name</label>
              <InputField />
            </div>
            <div className="grid grid-cols-2 gap-14">
              <div className="flex">
                <label>Phone</label>
                <InputField />
              </div>
              <div className="flex">
                <label>Email</label>
                <InputField />
              </div>
            </div>
          </div>

          <div className="mt-24 flex justify-center items-center">
            <Button text={"Book A Free Consultation"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
