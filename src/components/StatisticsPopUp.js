import React from 'react';
import closeIcon from '../assets/svg/close.svg';
import { MainContext, useContext } from '../Context';
import BarChart from './BarChart';
import coin from '../assets/svg/coin.svg'

const StatisticsPopUp = ({ setShowStatisticsPopup }) => {
    const { userStats } = useContext(MainContext);
    const handleCloseClick = () => {
        setShowStatisticsPopup(false);
    };
    const winPercentage = userStats.gamesPlayed !== 0 ? Math.round(userStats.gamesWin.length / userStats.gamesPlayed * 100) : 0;

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            setShowStatisticsPopup(false);
        }
    };

    return (
        <div className="px-4 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50" onClick={handleBackgroundClick}>
            <div className="bg-white p-4 rounded-md shadow-lg">
                <div className='flex justify-between items-center mb-4'>
                    <h2 className="text-2xl font-bold">İSTATİSTİK</h2>
                    <img src={closeIcon} alt='close' className='w-[26px] cursor-pointer' onClick={handleCloseClick}></img>
                </div>

                <div className='flex gap-6 text-center mt-2 justify-center'>
                    <div className='flex flex-col'>
                        <p className='text-2xl text-[#599F44] font-extrabold'>
                            {userStats.gamesPlayed}
                        </p>
                        <p className='text-[12px]'>
                            Oynanan
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-2xl text-[#599F44] font-extrabold'>
                            {userStats.gamesWin.length}</p>
                        <p className='text-[12px]'>
                            Kazanılan
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-2xl text-[#599F44] font-extrabold'>
                            {userStats.gamesPlayed - userStats.gamesWin.length}</p>
                        <p className='text-[12px]'>
                            Kaybedilen
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-2xl text-[#599F44] font-extrabold'>
                            {winPercentage}
                        </p>
                        <p className='text-[12px]'>
                            Galibiyet %
                        </p>
                    </div>
                </div>

                <div className='flex gap-6 text-center mt-2 justify-center pb-6'>
                    <div className='flex flex-col'>
                        <p className='text-2xl text-[#599F44] font-extrabold'>
                            {userStats.series}</p>
                        <p className='text-[12px]'>
                            Seri
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-2xl text-[#599F44] font-extrabold'>
                            {userStats.bestSeries}</p>
                        <p className='text-[12px]'>
                            En İyi Seri
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex items-center justify-center'>
                            <p className='text-2xl text-[#C9B458] font-extrabold'>
                                {userStats.totalScore}
                            </p>
                            <img alt='coin' className='w-5 ml-1 pb-1' src={coin}>
                            </img>
                        </div>
                        <p className='text-[12px]'>
                            Toplam Puan
                        </p>
                    </div>
                </div>

                <p className='pb-2 font-bold'>Tahmin ve Puan Dağılımı</p>
                <BarChart gamesWin={userStats.gamesWin} />

            </div>
        </div>
    );
};

export default StatisticsPopUp;
