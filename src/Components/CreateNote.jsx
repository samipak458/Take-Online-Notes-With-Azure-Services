import React, { useState } from 'react';

const CreateNote = ({ handleAddNote }) => {

  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;

  const handleChange = (event) => {

    if ((characterLimit - event.target.value.length) >= 0) { // if the character limit is greater than 0 then set the value of the noteText to the state of the noteText
    setNoteText(event.target.value);
    }
    else {
      alert('You cannot add a note of more than 200 characters');
    }
  }

  const saveNote = () => {

    if (noteText.trim().length > 0) { // trim() is used to remove the white spaces from the start and end of the string
      handleAddNote(noteText);
      setNoteText('');
    }
    else {
      alert('Please enter a note');
    }
  }

  return (
    <>
      <div className='bg-[#67d7cc] rounded-lg p-3 shadow-lg mt-2'>
        <textarea
        className='bg-transparent placeholder-gray-700 text-gray-800 w-full outline-none font-poppins'
          rows='8'
          cols='10'
          placeholder='Take a note...'
          value={noteText}
          onChange={handleChange} />
        <div className='flex gap-10 justify-between items-center font-roboto'>
          <small>{characterLimit - noteText.length} Remaining</small>  {/*subtract the length of the note from the character limit  */}
          <button className='bg-gray-200 rounded-full px-2 py-1 text-sm' onClick={saveNote}>Save</button>
        </div>
      </div>
    </>
  );
}

export default CreateNote;
