import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './notesInfoSlice';
import editorReducer from './editorInfoSlice';

export default configureStore({
  reducer: {
    notesInfo: notesReducer,
    editorInfo: editorReducer,
  },
});
