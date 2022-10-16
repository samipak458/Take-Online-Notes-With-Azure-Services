import React from "react";


const Search = ( props ) => {

    return (
        <>
        <div className={props.darkMode? "inputpartDark":"inputpart"}>
        <i className="fa fa-search" aria-hidden="true"></i>
            <input className={props.darkMode? "inputpartDark":"inputpart"}
            type="text" 
            placeholder="Type to search ..." 
            onChange={(event) => {
                props.handleSearchNote(event.target.value);  // handleSearchNote is a function that is passed as a prop from App.jsx and setting the value of the search text to the state of the App.jsx
            }}
            />
        </div>
        </>
    );
}

export default Search;
