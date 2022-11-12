import React, { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

export default function ToDo({ title }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const clickHandler = () => {
        console.log('handler Clicked', title);
        setModalOpen(true);
    };
    const closeModalHandler = () => {
        setModalOpen(false);
    };
    return (
        <div className="card">
            <h3>{title}</h3>
            <div className="actions">
                <button className="btn" onClick={clickHandler}>
                    Delete
                </button>
            </div>
            {isModalOpen ? (
                <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
            ) : null}
            {isModalOpen ? <Backdrop closeModal={closeModalHandler} /> : null}
        </div>
    );
}
