import NoteListItems from "./NoteListItems";
import "../styles/NoteList.scss";
import AddNote from "./AddNote";

function NoteList({ notes, addNoteFunc, handleDelete, handleEdit, lightMode }) {
  return (
    <div className="note-list">
      <AddNote addNoteFunc={addNoteFunc}/>
      {/* for each note in NoteList, we want to render a not component NoteListItem*/}
     {notes.map((notes) => 
     <NoteListItems key={notes.id} id={notes.id} text={notes.text} date={notes.date} handleDelete={handleDelete} handleEdit={handleEdit} lightMode={lightMode}/>
     )}
    </div>
  );
}

export default NoteList;
