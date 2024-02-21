
import React from "react";
import { MainContext, useContext } from '../Context';

const CharacterGrid = () => {
    const { data } = useContext(MainContext);

    return (
        <div className="w-[500px] mx-auto mt-[70px]">
            <div className="grid grid-cols-6 gap-2">
                {data.map((row, rowIndex) => (
                    row.map((char, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className="w-16 h-16 border border-black border-6 flex items-center justify-center"
                        >
                            {char}
                        </div>
                    ))
                ))}
            </div>
        </div>
    );
};

export default CharacterGrid;
