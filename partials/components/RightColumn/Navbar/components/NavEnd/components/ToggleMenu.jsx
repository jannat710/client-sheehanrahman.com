import Image from 'next/image'
import React from 'react'

function ToggleMenu({ onClick }) {
    return (
        <figure className="w-6 md:w-11 cursor-pointer" onClick={onClick}>
            <Image
                src="/assets/Home/menu.png"
                alt="menu-image"
                height={44}
                width={44}
            />
        </figure>
    )
}

export default ToggleMenu