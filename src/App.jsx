import { useState } from "react";
import { nanoid } from "nanoid";
import "./styles/App.scss";
import NoteList from "./components/NoteList";
import Search from "./components/Search";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "What a beautiful day to croak",
      date: "24/06/24",
    },
    {
      id: nanoid(),
      text: "I need to leap higher to reach my goals",
      date: "24/06/24",
    },
    {
      id: nanoid(),
      text: "Grocery List: 1. flies 2. worms 3. new lilypad.",
      date: "23/06/24",
    },
    {
      id: nanoid(),
      text: "Note to self, bees are friends, not food.",
      date: "22/06/24",
    },
  ]);

const [ searchText, setSearchText ] = useState(' ');

  const addNote = (text) => {
    const date = new Date();
    const addedNote = {
      id: nanoid(),
      text,
      date: date.toLocaleDateString(),
    };
    //creates new array *GOOD* does not mutate already existing array *BAD*
    const allNotesArr = [addedNote, ...notes]; //this wis the array that contains all the notes [...existing, newlyAdded]

    setNotes(allNotesArr);
  };

  const deleteNote = (id) => {
    const notesAfterDelete = notes.filter((note) => note.id !== id);
    setNotes(notesAfterDelete);
  };

  const editNote = (id, editText) => {
    const updateNotes = notes.map((note) =>
      note.id === id ? { ...note, text: editText } : note
    );
    setNotes(updateNotes)
  };

  return (
    <div className="master">
      <Search handleSearch={setSearchText}/>
      <NoteList notes={notes.filter((note)=>
      note.text.toLocaleLowerCase().includes(searchText))} addNoteFunc={addNote} handleDelete={deleteNote} handleEdit={editNote}/>
    </div>
  );
}

export default App;
