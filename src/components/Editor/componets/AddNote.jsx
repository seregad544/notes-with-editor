import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import { v4 as generateId } from 'uuid';
import draftToHtml from 'draftjs-to-html';
import { useDispatch } from 'react-redux';
import { add, setCurrentNote } from '../../../store/notesInfoSlice';
import { closeEditor } from '../../../store/editorInfoSlice';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../styles.css';

function AddNote() {
  const dispatch = useDispatch();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [title, setTitle] = useState('');

  const handlerAdd = () => {
    if (title !== '') {
      const id = generateId();
      const body = draftToHtml(convertToRaw(editorState.getCurrentContent()));
      const note = {
        id,
        title,
        body,
      };
      dispatch(add(note));
      dispatch(setCurrentNote(id));
      dispatch(closeEditor());
    } else {
      alert('Необходимо ввести название заметки');
    }
  };

  return (
    <div className="editor__container">
      <input
        className="editor__input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Введите название заметки"
      />
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        placeholder="Введите заметку..."
      />
      <button
        type="button"
        onClick={handlerAdd}
      >
        добавить
      </button>
    </div>
  );
}

export default AddNote;
