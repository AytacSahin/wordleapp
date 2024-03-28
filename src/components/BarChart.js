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

    return (
        <div className="p-4 bg-gray-100 rounded-md">
            {Object.keys(winBar).map((index, i) => {
                // Genişlik hesaplaması
                const barWidth = `${Math.max(1, (winBar[index] / totalScore) * 100)}%`;
                // Bar rengini belirle
                const barColor = colorPalette[i % colorPalette.length];

                return (
                    <div key={index} className="flex items-center mb-2">
                        <div className="bar-label mr-2 w-2 text-sm">{parseInt(index) + 1}</div>
                        {/* Bar */}
                        <div
                            className="bar h-8 flex items-center justify-start px-[6px] rounded-md"
                            style={{ width: barWidth, backgroundColor: barColor, minWidth: '48px' }}
                        >
                            {/* Bar içindeki değer */}
                            <span className="text-white text-xs">{winBar[index] * 10 * (6 - parseInt(index))}</span>
                            <img role="coin" className='w-2 ml-1 pb-1' src={coin}></img>
                        </div>
                        {/* Bar sayısı */}
                        {winBar[index] !== 0 && (
                            <span className="text-black italic ml-2 text-xs">{winBar[index]} Wordle</span>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default BarChart;
