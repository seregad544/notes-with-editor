import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NoteList from './components/NoteList/NoteList';
import Head from './components/head/Head';
import Note from './components/Note/Note';
import MyEditor from './components/Editor/Editor';
import { selectIsOpen } from './store/editorInfoSlice';
import { initialization } from './store/notesInfoSlice';

export default function App() {
  const editorIsOpen = useSelector(selectIsOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data) {
      dispatch(initialization(data));
    }
  }, [dispatch]);

  return (
    <div>
      <div className="App">
        <Head />
        <NoteList />
        {editorIsOpen ? <MyEditor /> : <Note />}
      </div>
    </div>
  );
}
