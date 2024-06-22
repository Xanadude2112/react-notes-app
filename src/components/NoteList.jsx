import NoteListItems from "./NoteListItems";
import "../styles/NoteList.scss";

function NoteList({ notes }) {
  return (
    <div className="note-list">
      {/* for each note in NoteList, we want to render a not component NoteListItem*/}
     {notes.map((notes) => 
     <NoteListItems key={notes.id} id={notes.id} text={notes.text} date={notes.date}/>
     )}
    </div>
  );
}

export default NoteList;
