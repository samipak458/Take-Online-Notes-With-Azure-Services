import React from 'react';
import {DarkModeRounded, LightModeRounded} from "@mui/icons-material";

const Header = ({handleDarkMode, darkMode})=> {


    return (
        <div className='flex justify-between gap-10 items-center bg-[#fbbd04b0] py-4 px-3 text-white'>
            <h4 className='font-mono font-bold text-3xl'><i className="fa fa-sticky-note" aria-hidden="true"></i> Take Notes</h4>
            <button className={`rounded-full w-[60px] p-1 ${darkMode ? 'bg-[#1f1f1f]' : 'bg-gray-100'}`} onClick={() => handleDarkMode(prev => !prev)}>
                <div className={`w-[25px] ${!darkMode && 'translate-x-[25px]'} relative transition-all ease-out duration-300`}>
                    {
                        darkMode ? <LightModeRounded className='text-gray-100' /> : <DarkModeRounded className='text-[#1f1f1f]' />
                    }
                </div>
            </button>
        </div>
    );
}

export default Header;