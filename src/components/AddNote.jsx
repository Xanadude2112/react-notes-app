import { useState } from "react";
import "../styles/AddNote.scss";

function AddNote({ addNoteFunc }) {
  const [newNote, setNewNote] = useState("");

  const charLimit = 200;

  const handleChange = (event) => {
    if(charLimit - event.target.value.length >= 0){
      setNewNote(event.target.value);
    }
  };

  const handleSubmit = () => {
    if (newNote.trim().length <= 0) {
      const button = document.getElementsByClassName("add-button")[0];
      button.classList.remove("add-button")
      button.classList.add("error");

      setTimeout(function () {
        button.classList.remove("error");
        button.classList.add("add-button");
      },800)
    } else {
      addNoteFunc(newNote);
      setNewNote('');
    }
  };

  return (
    <div className="add-note-item">
      <textarea
        name=""
        id=""
        placeholder="Pond-er your thoughts here..."
        value={newNote}
        onChange={handleChange}
      ></textarea>
      <div className="add-note-footer">
        <small>{charLimit - newNote.length}</small>
        <div className="add-note-interaction">
          <button className="add-button" onClick={handleSubmit}>
            Pad It
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddNote;
