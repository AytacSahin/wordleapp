import React, { useState } from 'react';
import icon from '../assets/images/icon.png';
import statistics from '../assets/svg/statistics.svg';
import information from '../assets/svg/information.svg';
import InformationPopUp from './InformationPopUp';
import StatisticsPopUp from './StatisticsPopUp';

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
        <div className='flex items-center justify-between w-full border-b-2'>

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
                <StatisticsPopUp setShowStatisticsPopup={setShowStatisticsPopup} />
            )}

        </div>
    )
}

export default Header;
