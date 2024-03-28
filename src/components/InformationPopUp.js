import React from 'react';
import closeIcon from '../assets/svg/close.svg';

const InformationPopUp = ({ setShowInformationPopup }) => {

    const handleCloseClick = () => {
        setShowInformationPopup(false);
    };

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            setShowInformationPopup(false);
        }
    };

    return (
        <div className="px-6 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50" onClick={handleBackgroundClick}>
            <div className="bg-white p-8 rounded-md shadow-lg">
                <div className='flex justify-between items-center mb-4'>
                    <h2 className="text-2xl font-bold">NASIL OYNANIR?</h2>
                    <img src={closeIcon} className='w-[26px] cursor-pointer' onClick={handleCloseClick}></img>
                </div>
                <p><span className='font-bold'>WORDLE</span>'ı 6 denemede bulun.</p>
                <p>Her tahmin 5 harfli doğru bir kelime olmalıdır. Göndermek için ENTER'a basın.</p>
                <p className='border-b-2 pb-2'>Her tahminden sonra kutucukların renkleri tahmininizin yakınlığına göre değişecektir.</p>
                <p className='pt-2 '>Örnekler:</p>
                <ul className='pb-2'>
                    <li>
                        <div className="flex items-center my-2">
                            <div className="w-8 h-8 border border-black bg-[#6AAA64] font-bold mr-1 text-[22px] text-white flex items-center justify-center pt-1">A</div>
                            <div className="w-8 h-8 border border-black mr-1 text-[22px] font-bold flex items-center justify-center pt-1">B</div>
                            <div className="w-8 h-8 border border-black mr-1 text-[22px] font-bold flex items-center justify-center pt-1">O</div>
                            <div className="w-8 h-8 border border-black mr-1 text-[22px] font-bold flex items-center justify-center pt-1">N</div>
                            <div className="w-8 h-8 border border-black mr-1 text-[22px] font-bold flex items-center justify-center pt-1">E</div>
                        </div>
                        A harfi kelimede var ve doğru yerde.
                    </li>

                    <li>
                        <div className="flex items-center my-2">
                            <div className="w-8 h-8 border border-black mr-1 text-[22px] font-bold flex items-center justify-center pt-1">G</div>
                            <div className="w-8 h-8 border border-black bg-[#C9B458] font-bold mr-1 text-[22px] text-white flex items-center justify-center pt-1">İ</div>
                            <div className="w-8 h-8 border border-black mr-1 text-[22px] font-bold flex items-center justify-center pt-1">Z</div>
                            <div className="w-8 h-8 border border-black mr-1 text-[22px] font-bold flex items-center justify-center pt-1">E</div>
                            <div className="w-8 h-8 border border-black mr-1 text-[22px] font-bold flex items-center justify-center pt-1">M</div>
                        </div>
                        İ harfi kelimede var fakat yanlış yerde.
                    </li>

                    <li>
                        <div className="flex items-center my-2">
                            <div className="w-8 h-8 border border-black mr-1 text-[22px] font-bold flex items-center justify-center pt-1">F</div>
                            <div className="w-8 h-8 border border-black mr-1 text-[22px] font-bold flex items-center justify-center pt-1">A</div>
                            <div className="w-8 h-8 border border-black mr-1 text-[22px] font-bold flex items-center justify-center pt-1">L</div>
                            <div className="w-8 h-8 border border-black mr-1 text-[22px] font-bold flex items-center justify-center pt-1">E</div>
                            <div className="w-8 h-8 border border-black bg-[#787C7E] font-bold mr-1 text-[22px] text-white flex items-center justify-center pt-1">Z</div>
                        </div>
                        Z harfi kelimede yok.
                    </li>

                </ul>
                <p className='font-bold border-t-2 pt-2'>Üstelik dilediğin kadar oyna!</p>
            </div>
        </div >
    )
}

export default InformationPopUp;
