import React, { useEffect } from "react";
import { MainContext, useContext } from '../Context';

const TurkishKeyboard = () => {
    const { onKeyPress, onDelete, onEnterPress, turkishChars } = useContext(MainContext);

    useEffect(() => {
        const handleKeyDown = (event) => {
            const pressedKey = event.key.toUpperCase();

            if (/^[A-ZĞÜŞİÖÇ]$/.test(pressedKey)) {
                onKeyPress(pressedKey);
            } else if (pressedKey === "ENTER") {
                onEnterPress();
            } else if (pressedKey === "BACKSPACE") {
                onDelete();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onKeyPress, onEnterPress, onDelete]);


    return (
        <div className="mx-auto">
            <div className="flex flex-col justify-center mt-6">
                <div className="flex justify-center">
                    {turkishChars.map((char, index) => (
                        <div
                            key={index}
                            className="w-12 h-12 border border-gray-400 flex items-center justify-center m-2 cursor-pointer"
                            onClick={() => onKeyPress(char.char)}
                            style={{ backgroundColor: char.color }}
                        >
                            {char.char}
                        </div>
                    )).slice(0, 10)}
                </div>
                <div className="flex justify-center">
                    {turkishChars.map((char, index) => (
                        <div
                            key={index}
                            className="w-12 h-12 border border-gray-400 flex items-center justify-center m-2 cursor-pointer"
                            onClick={() => onKeyPress(char.char)}
                            style={{ backgroundColor: char.color }}
                        >
                            {char.char}
                        </div>
                    )).slice(10, 21)}
                </div>
                <div className="flex justify-center">
                    <div
                        className="w-12 h-12 border border-gray-400 flex items-center justify-center m-2 cursor-pointer"
                        onClick={onEnterPress}
                    >
                        Enter
                    </div>
                    {turkishChars.map((char, index) => (
                        <div
                            key={index}
                            className="w-12 h-12 border border-gray-400 flex items-center justify-center m-2 cursor-pointer"
                            onClick={() => onKeyPress(char.char)}
                            style={{ backgroundColor: char.color }}
                        >
                            {char.char}
                        </div>
                    )).slice(21, 29)}
                    <div
                        className="w-12 h-12 border border-gray-400 flex items-center justify-center m-2 cursor-pointer"
                        onClick={onDelete}
                    >
                        Sil
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TurkishKeyboard;