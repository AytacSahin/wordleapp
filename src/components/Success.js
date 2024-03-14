
import React, { useContext } from 'react';
import { MainContext } from '../Context';

const Success = () => {

    const { currRow } = useContext(MainContext);

    const handleReset = () => {
        window.location.reload();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50">
            <div className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center gap-6">
                <p className="text-xl">Tebrikler</p>
                <p className="text-xl">{currRow}. denemede bildiniz!</p>
                <button
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none"
                    onClick={handleReset}
                >
                    Tekrar Oyna!
                </button>
            </div>
        </div>
    );
}

export default Success