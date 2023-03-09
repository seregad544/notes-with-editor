import { React } from 'react';
import { useSelector } from 'react-redux';
import dompurify from 'dompurify';
import { selectCurrentNote } from '../../store/notesInfoSlice';
import './styles.css';

function Note() {
  const note = useSelector(selectCurrentNote);
  const xssDefense = dompurify.sanitize;

  return (
    <div className="note__container">
      {note ? <div dangerouslySetInnerHTML={{ __html: xssDefense(note.body) }} /> : null}
    </div>
  );
}

export default Note;
