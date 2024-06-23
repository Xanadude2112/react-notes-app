import { useState } from "react";
import { nanoid } from "nanoid";
import "./styles/App.scss";
import NoteList from "./components/NoteList";
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";

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

  const [searchText, setSearchText] = useState("");

  const [lightMode, setLightMode] = useState(false);

  const addNote = (text) => {
    const date = new Date();
    const addedNote = {
      id: nanoid(),
      text,
      date: date.toLocaleDateString(),
    };
    const allNotesArr = [addedNote, ...notes];
    setNotes(allNotesArr);
  };

  const deleteNote = (id) => {
    const notesAfterDelete = notes.filter((note) => note.id !== id);
    setNotes(notesAfterDelete);
  };

  const editNote = (id, editText) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, text: editText } : note
    );
    setNotes(updatedNotes);
  };

  return (
    <div className={`${lightMode && "light-mode"}`}>
      <div className="master">
        <Header handleLightMode={setLightMode} lightMode={lightMode}/>
        <Search handleSearch={setSearchText} />{" "}
        {/* Pass setSearchText as handleSearch */}
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          addNoteFunc={addNote}
          handleDelete={deleteNote}
          handleEdit={editNote}
          lightMode={lightMode}
        />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
