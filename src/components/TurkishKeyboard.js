import React, { useEffect } from "react";
import { MainContext, useContext } from '../Context';
import deleteIcon from '../assets/svg/backspace.svg';

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
            <div className="flex flex-col justify-center phone:mt-4 tablet:mt-8 mb-8">
                <div className="flex justify-center">

                    {turkishChars.map((char, index) => (
                        <div
                            key={index}
                            className="w-12 h-14 rounded-md flex items-center justify-center m-1 cursor-pointer font-bold"
                            onClick={() => onKeyPress(char.char)}
                            style={{
                                backgroundColor: char.color,
                                color: `${char.color === "#D3D6DA" ? "black" : "white"}`
                            }}
                        >
                            {char.char}
                        </div>
                    )).slice(0, 10)}
                </div>
                <div className="flex justify-center">
                    {turkishChars.map((char, index) => (
                        <div
                            key={index}
                            className="w-12 h-14 rounded-md flex items-center justify-center m-1 cursor-pointer font-bold"
                            onClick={() => onKeyPress(char.char)}
                            style={{
                                backgroundColor: char.color,
                                color: `${char.color === "#D3D6DA" ? "black" : "white"}`
                            }}                        >
                            {char.char}
                        </div>
                    )).slice(10, 21)}
                </div>
                <div className="flex justify-center">
                    <div
                        className="w-20 h-14 bg-[#D3D6DA] rounded-md flex items-center justify-center m-1 cursor-pointer font-semibold phone:text-[12px] tablet:text-[16px]"
                        onClick={onEnterPress}
                    >
                        ENTER
                    </div>
                    {turkishChars.map((char, index) => (
                        <div
                            key={index}
                            className="w-12 h-14 rounded-md flex items-center justify-center m-1 cursor-pointer font-bold"
                            onClick={() => onKeyPress(char.char)}
                            style={{
                                backgroundColor: char.color,
                                color: `${char.color === "#D3D6DA" ? "black" : "white"}`
                            }}
                        >
                            {char.char}
                        </div>
                    )).slice(21, 29)}
                    <div
                        className="w-20 h-14 bg-[#D3D6DA] rounded-md flex items-center justify-center m-1 cursor-pointer font-bold"
                        onClick={onDelete}
                    >
                        <img src={deleteIcon} alt='delete button' className="w-6"></img>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TurkishKeyboard;