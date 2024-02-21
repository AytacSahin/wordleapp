import React from 'react';
import gameicon from '../assets/svg/gamepad.svg';

const Header = () => {
    return (
        <div className='flex flex-col items-center w-full mt-4'>
            <h1 className='text-[40px] tracking-widest'>WORDLE APP</h1>
            <img
                src={gameicon}
                alt="gamepad"
                className="w-[100px] h-[100px] scale-[1] hover:scale-[1.2] transition-transform duration-300 ease-in-out"
            />
        </div>
    )
}

export default Header