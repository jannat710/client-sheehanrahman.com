
import { useState } from "react";
import NavItems from "./components/NavItems";
import { IoCloseSharp } from "react-icons/io5";
import ToggleMenu from "./components/ToggleMenu";

function NavEnd() {
    const [showModal, setShowModal] = useState(false);

    const handleToggleModal = () => {
        setShowModal(!showModal);
    };

    const closeMenu = () => {
        setShowModal(false);
    };

    return (
        <>
            <ToggleMenu onClick={handleToggleModal}/>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative bg-black w-full h-full flex items-center justify-center">
                        <div
                            className="absolute top-16 right-9 lg:right-24  text-white"
                            onClick={handleToggleModal}
                        >
                            <IoCloseSharp className="text-3xl md:text-5xl" />
                        </div>
                        <NavItems closeMenu={closeMenu} />
                    </div>
                </div>
            )}
        </>
    );
}

export default NavEnd;
