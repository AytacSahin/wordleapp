import React, { useEffect } from "react";
import { MainContext, useContext } from '../Context';

const TurkishKeyboard = () => {
    const { onKeyPress, onDelete, onEnterPress, turkishChars } = useContext(MainContext);

    useEffect(() => {
        const handleKeyDown = (event) => {
            const pressedKey = event.key;
            if (pressedKey === "i" || pressedKey === "İ") {
                onKeyPress("İ");
            } else if (/^[A-ZĞÜŞÖÇ]$/.test(pressedKey.toUpperCase())) {
                onKeyPress(pressedKey.toUpperCase());
            } else if (pressedKey.toUpperCase() === "ENTER") {
                onEnterPress();
            } else if (pressedKey.toUpperCase() === "BACKSPACE") {
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
            <div className="flex flex-col justify-center mt-8">
                <div className="flex justify-center">
                    {turkishChars.map((char, index) => (
                        <div
                            key={index}
                            className="w-12 h-12 border border-gray-600 rounded-lg flex items-center justify-center m-1 cursor-pointer"
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
                            className="w-12 h-12 border border-gray-600 rounded-lg flex items-center justify-center m-1 cursor-pointer"
                            onClick={() => onKeyPress(char.char)}
                            style={{ backgroundColor: char.color }}
                        >
                            {char.char}
                        </div>
                    )).slice(10, 21)}
                </div>
                <div className="flex justify-center">
                    <div
                        className="w-20 h-12 border border-gray-600 bg-white rounded-lg flex items-center justify-center m-1 cursor-pointer"
                        onClick={onEnterPress}
                    >
                        Enter
                    </div>
                    {turkishChars.map((char, index) => (
                        <div
                            key={index}
                            className="w-12 h-12 border border-gray-600 rounded-lg flex items-center justify-center m-1 cursor-pointer"
                            onClick={() => onKeyPress(char.char)}
                            style={{ backgroundColor: char.color }}
                        >
                            {char.char}
                        </div>
                    )).slice(21, 29)}
                    <div
                        className="w-12 h-12 border border-gray-600 bg-white rounded-lg flex items-center justify-center m-1 cursor-pointer"
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