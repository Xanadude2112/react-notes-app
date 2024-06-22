import { useState } from "react";
import { nanoid } from "nanoid";
import "./styles/App.scss";
import NoteList from "./components/NoteList";

function App() {
  const [ notes, setNotes ] = useState ([{
    id: nanoid(),
    text:"this is my first note!",
    date: "22/06/24"
    },
    {
      id: nanoid(),
      text:"this is my second note!",
      date: "23/06/24"
      },
      {
        id: nanoid(),
        text:"this is my third note!",
        date: "24/06/24"
        }]);
  return (
    <div className="master">
      <NoteList notes={notes}/>
    </div>
  );
}

export default App;
