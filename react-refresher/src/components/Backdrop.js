import React from 'react';

export default function Backdrop({ closeModal }) {
    return <div className="backdrop" onClick={closeModal} />;
}
