import { React } from 'react';
import { useSelector } from 'react-redux';
import dompurify from 'dompurify';
import { selectCurrentNote } from '../../store/notesInfoSlice';
import './styles.css';

function Note() {
  const { body: currentNote } = useSelector(selectCurrentNote);
  const sanitizer = dompurify.sanitize;

  return (
    <div className="note__container">
      {currentNote ? <div dangerouslySetInnerHTML={{ __html: sanitizer(currentNote) }} /> : null}
    </div>
  );
}

export default Note;
