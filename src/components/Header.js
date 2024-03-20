import React, { useState } from 'react';
import icon from '../assets/images/icon.png';
import statistics from '../assets/svg/statistics.svg';
import information from '../assets/svg/information.svg';
import InformationPopUp from './InformationPopUp';

const Header = () => {
    const [showInformationPopup, setShowInformationPopup] = useState(false);
    const [showStatisticsPopup, setShowStatisticsPopup] = useState(false);

    const handleInformationClick = () => {
        setShowInformationPopup(true);
    };

    const handleStatisticsClick = () => {
        setShowStatisticsPopup(true);
    };

    return (
        <div className='flex items-center justify-between w-full mt-2 border-b-2'>

            <div>
                <img
                    src={information}
                    alt="information icon"
                    className="w-[20px] h-[20px] tablet:ml-4 phone:ml-2 cursor-pointer"
                    onClick={handleInformationClick}
                />
            </div>

            <div className='flex justify-center items-center'>
                <img
                    src={icon}
                    alt="app icon"
                    className="w-[25px] h-[25px]"
                />
                <h1 className='text-[25px] ml-2 mt-2 tracking-tight font-extrabold'>WORDLE</h1>
            </div>

            <div>
                <img
                    src={statistics}
                    alt="statistics icon"
                    className="w-[30px] h-[30px] tablet:mr-4 phone:mr-2 cursor-pointer"
                    onClick={handleStatisticsClick}
                />
            </div>

            {showInformationPopup && (
                <InformationPopUp setShowInformationPopup={setShowInformationPopup} />
            )}

            {showStatisticsPopup && (
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
                    {/* Buraya istatistik içeriğini ekleyebilirsiniz */}
                    <p className="text-white">Statistics Popup</p>
                    <button className="text-white" onClick={() => setShowStatisticsPopup(false)}>Close</button>
                </div>
            )}

        </div>
    )
}

export default Header;
