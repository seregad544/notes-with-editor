import React from 'react';
import { useSelector } from 'react-redux';
import AddNote from './componets/AddNote';
import EditNote from './componets/EditNote';
import { selectEditedNote } from '../../store/editorInfoSlice';

function MyEditor() {
  const editedNote = useSelector(selectEditedNote);

  return (editedNote ? <EditNote /> : <AddNote />);
}

export default MyEditor;
