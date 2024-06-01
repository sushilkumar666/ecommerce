// App.js
import React, { useState } from 'react';
import MyModal from './MyModal';

function MyModalHandler() {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div className="App">
            <button
                onClick={handleShow}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
                Launch Modal
            </button>

            <MyModal show={showModal} handleClose={handleClose} />
        </div>
    );
}

export default MyModalHandler;
