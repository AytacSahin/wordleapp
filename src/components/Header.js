import React from 'react';
import gameicon from '../assets/svg/gamepad.svg';
import icon from '../assets/images/icon.png';

const Header = () => {
    return (
        <div className='flex justify-center w-full mt-2'>
            <div className='flex items-center justify-center'>
                <img
                    src={icon}
                    alt="app icon"
                    className="w-[40px] h-[40px]"
                />
            </div>
            <div className='w-[220px] flex items-center justify-center'>
                <h1 className='text-[40px] pt-2 tracking-widest'>WORDLE</h1>
            </div>
        </div>
    )
}

export default Header