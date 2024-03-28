import React from 'react';
import coin from '../assets/svg/coin.svg'

const BarChart = ({ gamesWin }) => {

    const winBar = { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 };
    const colorPalette = ['#1E4620', '#336633', '#4D804D', '#66B966', '#80D280', '#99FF99'];

    // Oyun kazanma verileri
    gamesWin.forEach((winCount) => {
        winBar[winCount.toString()] += 1;
    });

    // Toplam oyun sayısı
    const totalScore = Object.values(winBar).reduce((total, value) => total + value, 0);

    console.log(totalScore);

    return (
        <div className="p-4 bg-gray-100 rounded-md">
            {Object.keys(winBar).map((index, i) => {
                // Genişlik hesaplaması
                const barWidth = `${Math.max(1, (winBar[index] / totalScore) * 100)}%`;
                // Bar rengini belirle
                const barColor = colorPalette[i % colorPalette.length];

                return (
                    <div key={index} className="flex items-center mb-2">
                        <div className="bar-label mr-2 w-2 text-sm">
                            {parseInt(index) + 1}
                        </div>
                        {/* Bar */}
                        <div
                            className="bar h-6 flex items-center justify-start rounded-md"
                            style={{ width: barWidth, backgroundColor: barColor, minWidth: '18px' }}
                        >
                            {/* Bar İçerisi */}
                            <span className="text-white italic mx-auto text-xs">{winBar[index]}</span>
                        </div>
                        {winBar[index] !== 0 && (
                            <div className='flex'>
                                <span className="text-black text-xs ml-2 ">{winBar[index] * 10 * (6 - parseInt(index))}</span>
                                <img role="coin" className='w-2 ml-1 pb-1' src={coin}></img>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default BarChart;
