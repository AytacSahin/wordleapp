import React, { useEffect } from "react";
import { MainContext, useContext } from '../Context';

const CharacterGrid = () => {
    const { data, rowData } = useContext(MainContext);

    useEffect(() => {
        console.log("Tüm data:", data);
    }, [rowData])

    return (
        <div className="w-[440px] mx-auto mt-[7px]">
            <div className="grid grid-cols-5 gap-2">
                {data.map((row, rowIndex) => (
                    row.map((box, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className='w-20 h-20 border border-black border-6 flex items-center justify-center text-[40px]'
                            style={{ backgroundColor: box.color }}
                        >
                            {box.char}
                        </div>
                    ))
                ))}
            </div>
        </div>
    );
};

export default CharacterGrid;