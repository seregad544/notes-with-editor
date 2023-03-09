import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Editor } from 'react-draft-wysiwyg';
import {
  EditorState, convertToRaw, convertFromHTML, ContentState,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { change, selectAllNotes, selectCurrentNote } from '../../../store/notesInfoSlice';
import { closeEditor, selectEditedNote } from '../../../store/editorInfoSlice';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../styles.css';

function EditNote() {
  const dispatch = useDispatch();
  const id = useSelector(selectEditedNote);
  const [{ title }] = useSelector(selectAllNotes).filter((note) => note.id === id);
  const currentNote = useSelector(selectCurrentNote);
  const currentContent = ContentState.createFromBlockArray(convertFromHTML(currentNote.body));
  const [editorState, setEditorState] = useState(EditorState.createWithContent(currentContent));

  const handlerAdd = () => {
    const body = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    const note = {
      id,
      title,
      body,
    };
    dispatch(change({ id, note }));
    dispatch(closeEditor());
  };

  return (
    <div className="editor__container">
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        placeholder="The message goes here..."
      />
      <button
        type="button"
        onClick={handlerAdd}
      >
        изменить
      </button>
    </div>
  );
}

export default EditNote;
