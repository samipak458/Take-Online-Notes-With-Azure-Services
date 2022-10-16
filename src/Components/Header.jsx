import React from 'react';

export default function Header(props){
  
  return (
    <>
    <div className={props.darkMode ?'header dark-mode':'header'}>
        <h4 className={props.darkMode ?'brand dark-mode':'brand'}><i className="" aria-hidden="true"></i> Take Notes</h4>
         <nav class="toggles">
            <span className='darkTitle'>Dark Mode</span>
            <div>
            <input type="checkbox" id="switch" class="checkbox" onClick={props.toggleDarkMode}/>
            <label for="switch" class="toggle">
            
             </label>
             </div>
          </nav>
    </div>
    </> 
      )}