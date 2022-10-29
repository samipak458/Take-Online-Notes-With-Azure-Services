import React from 'react';

const Header = (props)=> {
  return (
    <>
   <div className='flex justify-between gap-10 items-center bg-[#fbbd04b0] py-4 px-3 text-white'>
    <h4 className='font-mono font-bold text-3xl'><i className="fa fa-sticky-note" aria-hidden="true"></i> Take Notes</h4>
    <button 
    className="save" 
    onClick={()=> props.handleDarkMode(
      (previousDarkMode) => !previousDarkMode /* here we are passing the previousDarkMode state to check is it true or false to change the theme of website */
    )}>Toggle Mode</button>
   </div>
    </>
  );
}

export default Header;