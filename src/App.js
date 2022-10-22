import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Notes from './Components/Notes';
import CreateNote from './Components/CreateNote';
import Search from './Components/Search';


const App = () => {

  const [notes, setNotes] = useState([]);   // input by user to create a note (stored in notes array)
  const [searchText, setSearchText] = useState('');  // input by user to search a note 
  const [darkMode, setDarkMode] = useState(false);  // input by user to change the theme of the app

  const addNote = (text) => {
    const date = new Date();

    const newNote = {
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote]; // "..." spread operator uses to add new note to the notes array (new note is added to the end of the array)
    setNotes(newNotes);  // setNotes is a function to update the notes array
  }


  const deleteNote = (id) => {
    const deletionId = Math.abs(notes.length - 1 - id);
    const newNotes = notes.filter((arrElem, index) => index !== deletionId); // filter() creates a new array with all elements that pass the test implemented by the provided function and check if the index of the array element is not equal to the id of the note to be deleted.
    setNotes(newNotes);
  }


  /***************************** Saving All Notes In Local Storage  *****************************/
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));

    if (savedNotes) {
      setNotes(savedNotes);
    }

  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <div className={`${darkMode && 'bg-[#1f1f1f] min-h-screen'}`}>
        <Header handleDarkMode={setDarkMode} />

        <div className='flex flex-col gap-5 my-8 w-[90vw] md:w-[70vw] lg:w-[50vw] mx-auto'>
          <Search handleSearchNote={setSearchText} />
              <CreateNote
                handleAddNote={addNote}
              />
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              {
                notes.length ? notes.filter((notes) => notes.text.includes(searchText)).reverse().map((note, index) => {
                  return (
                    <Notes
                      key={index}
                      id={index}
                      text={note.text}
                      date={note.date}
                      handleDeleteNote={deleteNote} 
                    />
                  )
                }) : (
                  <div className="empty-notes-wrapper">No Notes Added</div>
                )
              }
            </div>
        </div>
      </div>
    </>
  );
}

export default App;

  // filter() creates a new array with all elements that pass the test implemented by the provided function and filter the notes array to search the notes.
  // includes() uses for checking the input text is present in the note or not
  // toLowerCase() uses for converting the input text to lowercase
  // reverse() uses for displaying the latest note at the top
  // map() uses for displaying all the notes
