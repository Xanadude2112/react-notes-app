import "../styles/NoteListItems.scss"

function NoteListItems({ id, text, date }) {
  return (
    <div className="note-list-item">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <i className="fa-solid fa-trash-can"></i>
      </div>
    </div>
  );
}

export default NoteListItems;
