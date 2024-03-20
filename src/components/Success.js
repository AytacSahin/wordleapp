
import React from 'react';
import { MainContext, useContext } from '../Context';
import coin from '../assets/svg/coin.svg'

const Success = () => {

    const { currentWord, currRow } = useContext(MainContext);

    const handleReset = () => {
        window.location.reload();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50">
            <div className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center gap-4">
                <p className="text-xl">"{currentWord}"</p>
                <p className="text-xl">Tebrikler, {currRow}. denemede buldun!</p>
                <div className='flex'>
                    <p className="text-xl">+{(6 - currRow) * 10}</p>
                    <img role="coin" className='w-5 ml-1 pb-1' src={coin} />
                </div>
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