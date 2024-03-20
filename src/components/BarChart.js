import React from 'react';

const BarChart = ({ gamesWin }) => {
    const winBar = { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0 };

    // Oyun kazanma verilerini işleyerek winBar nesnesini dolduralım
    gamesWin.forEach((winCount) => {
        winBar[winCount.toString()] += 1;
    });

    // Toplam oyun sayısını hesaplayalım
    const totalScore = Object.values(winBar).reduce((total, value) => total + value, 0);

    return (
        <div className="p-4 bg-gray-100 rounded-md">
            {Object.keys(winBar).map((index) => {
                // Genişlik hesaplaması
                const barWidth = `${Math.max(1, (winBar[index] / totalScore) * 100)}%`;

                return (
                    <div key={index} className="flex items-center mb-2">
                        <div className="bar-label mr-2 w-2 text-sm">{parseInt(index) + 1}</div>
                        {/* Bar */}
                        <div
                            className="bar bg-[#599F44] h-8 flex items-center justify-end px-[6px] rounded-md"
                            style={{ width: barWidth, minWidth: '48px' }} // Min genişlik ekleyelim
                        >
                            {/* Bar içindeki değer */}
                            <span className="text-white text-xs">{winBar[index] * 10 * (5 - parseInt(index))}🪙</span>
                        </div>
                        {
                            (winBar[index] !== 0) && (
                                <span className="text-black italic ml-2 text-xs">{winBar[index]} Wordle</span>
                            )
                        }
                    </div>
                );
            })}
        </div>
    );
};

export default BarChart;
