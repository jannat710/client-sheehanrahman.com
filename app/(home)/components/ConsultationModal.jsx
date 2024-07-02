"use client"
import Button from '@/partials/elements/Button'
import Modal from '@/partials/elements/Modal'
import React, { useState } from 'react'

function ConsultationModal() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleButtonClick = () => {
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <Button
                text="Book A Free ConsultationSS"
                className="droid-lover-font"
                onClick={handleButtonClick}
            />
            {isModalVisible && <Modal onClose={handleCloseModal} />}
        </>
    )
}

export default ConsultationModal