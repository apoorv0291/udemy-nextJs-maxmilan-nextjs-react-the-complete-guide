import React from 'react';

export default function Modal({ setModalOpen }) {
    const cancelClickHanlder = () => {
        setModalOpen(false);
    };
    const confirmClickHanlder = () => {
        setModalOpen(false);
    };
    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn-alt" onClick={cancelClickHanlder}>
                Cancel
            </button>
            <button className="btn" onClick={confirmClickHanlder}>
                Confirm
            </button>
        </div>
    );
}
