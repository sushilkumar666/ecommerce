// MyModal.js
import React from 'react';

function MyModal({ show, handleClose }) {
    return (
        <>
            {show && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="bg-white p-6 rounded-lg shadow-lg z-10 w-11/12 md:w-1/2 lg:w-1/3">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-semibold">Modal Title</h2>
                            <button onClick={handleClose} className="text-gray-700">
                                &times;
                            </button>
                        </div>
                        <div className="mb-4">
                            <p>Woohoo, you're reading this text in a modal!</p>
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={handleClose}
                                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                            >
                                Close
                            </button>
                            <button
                                onClick={handleClose}
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default MyModal;
