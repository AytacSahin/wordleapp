import React from 'react';
import gameicon from '../assets/svg/gamepad.svg';

const Header = () => {
    return (
        <div className='flex flex-col items-center w-full mt-2'>
            <h1 className='text-[40px] tracking-widest'>WORDLE</h1>
            <img
                src={gameicon}
                alt="gamepad"
                className="w-[50px] h-[50px] scale-[2] hover:scale-[1.2] transition-transform duration-300 ease-in-out"
            />
        </div>
    )
}

export default Header