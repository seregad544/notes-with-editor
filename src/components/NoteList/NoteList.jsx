import { React } from 'react';
import { useSelector } from 'react-redux';
import { selectAllNotes, selectIdCurrentNote } from '../../store/notesInfoSlice';
import Item from './components/Item';
import './styles.css';

function NoteList() {
  const notes = useSelector(selectAllNotes);
  const IdCurrentNote = useSelector(selectIdCurrentNote);

  return (
    <div className="note-list">
      {notes.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          active={item.id === IdCurrentNote}
          content={item.title}
        />
      ))}
    </div>
  );
}

export default NoteList;
