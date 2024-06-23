import { useState, useEffect } from "react";
import "../styles/NoteListItems.scss";

function NoteListItems({ id, text, date, handleDelete, handleEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [textEdit, setTextEdit] = useState(text);

  useEffect(() => {
    setTextEdit(text);
  }, [text]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    handleEdit(id, textEdit);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setTextEdit(text);
  };

  return (
    <div className="note-list-item">
      {isEditing ? (
        <>
          <textarea
            value={textEdit}
            onChange={(event) => setTextEdit(event.target.value)}
          />
          <div className="note-footer">
            <button className="save-button" onClick={handleSaveClick}>
              Save
            </button>
            <button className="cancel-button" onClick={handleCancelClick}>
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <span>{text}</span>
          <div className="note-footer">
            <small>{date}</small>
            <div className="note-interaction">
              <i className="fa-solid fa-pen pen" onClick={handleEditClick}></i>
              <i
                className="fa-solid fa-trash-can trash"
                onClick={() => handleDelete(id)}
              ></i>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default NoteListItems;
