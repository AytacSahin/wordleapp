
import React from "react";
import { MainContext, useContext } from '../Context';
import turkishLetters from "../data/turkishchars";

const TurkishKeyboard = () => {

    const { onKeyPress, onDelete } = useContext(MainContext);

    return (
        <div className="flex flex-wrap justify-center mt-11">
            {turkishLetters.map((char, index) => (
                <div
                    key={index}
                    className="w-12 h-12 border border-gray-400 flex items-center justify-center m-2 cursor-pointer"
                    onClick={() => onKeyPress(char)}
                >
                    {char}
                </div>
            ))}
            <div
                className="w-12 h-12 border border-gray-400 flex items-center justify-center m-2 cursor-pointer"
                onClick={onDelete}
            >
                Sil
            </div>
        </div>
    );
};

export default TurkishKeyboard;
