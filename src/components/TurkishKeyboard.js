import React, { useEffect } from "react";
import { MainContext, useContext } from '../Context';

const TurkishKeyboard = () => {
    const { onKeyPress, onDelete, turkishChars } = useContext(MainContext);

    useEffect(() => {
        const handleKeyDown = (event) => {
            const pressedKey = event.key.toUpperCase();

            if (/^[A-Z]$/.test(pressedKey)) {
                onKeyPress(pressedKey);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="w-[700px] mx-auto">
            <div className="flex justify-center flex-wrap mt-6">
                {turkishChars.map((char, index) => (
                    <div
                        key={index}
                        className="w-12 h-12 border border-gray-400 flex items-center justify-center m-2 cursor-pointer"
                        onClick={() => onKeyPress(char.char)}
                        style={{ backgroundColor: char.color }}
                    >
                        {char.char}
                    </div>
                ))}
                <div
                    className="w-12 h-12 border border-gray-400 flex items-center justify-center m-2 cursor-pointer"
                    onClick={onDelete}
                >
                    Sil
                </div>
            </div>
        </div>
    );
};

export default TurkishKeyboard;