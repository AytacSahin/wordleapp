import React, { useState, useEffect } from "react";
import { MainContext, useContext } from '../Context';

const CharacterBox = ({ char, color }) => {
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        setAnimationClass('animate-bounce');
        const timeoutId = setTimeout(() => {
            setAnimationClass('');
        }, 500);
        return () => clearTimeout(timeoutId);
    }, [char]);

    return (
        <div
            className={`w-14 h-14 tablet:w-20 tablet:h-20 flex items-center justify-center pl-1 pt-2 tracking-widest phone:text-[40px] tablet:text-[50px] font-bold ${animationClass}`}
            style={{
                backgroundColor: color,
                border: `3px solid ${color || "#D3D6DA"}`,
                color: `${color ? "white" : "black"}`,
            }}
        >
            {char}
        </div>
    );
};

const CharacterGrid = () => {
    const { data } = useContext(MainContext);
    return (
        <div className="tablet:w-[440px] phone:w-[320px] mx-auto mt-[10px]">
            <div className="grid grid-cols-5 gap-2">
                {data.map((row, rowIndex) => (
                    row.map((box, colIndex) => (
                        <CharacterBox
                            key={`${rowIndex}-${colIndex}`}
                            char={box.char}
                            color={box.color}
                        />
                    ))
                ))}
            </div>
        </div >
    );
};

export default CharacterGrid;
