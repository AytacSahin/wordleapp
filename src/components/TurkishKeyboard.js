
import React from "react";
import { MainContext, useContext } from '../Context';
import { turkishChars } from "../data/turkishChars";

const TurkishKeyboard = () => {

    const { onKeyPress, onDelete } = useContext(MainContext);

    return (
        <div className="w-[800px] mx-auto">
            <div className="flex justify-center flex-wrap mt-6">
                {turkishChars.map((char, index) => (
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
        </div>
    );
};

export default TurkishKeyboard;
