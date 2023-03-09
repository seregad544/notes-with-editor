/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const editorSlice = createSlice({
  name: 'editorInfo',
  initialState: {
    isOpened: false,
    currentNote: null,
  },
  reducers: {
    addNote(state) {
      state.isOpened = true;
    },
    changeNote(state, action) {
      state.isOpened = true;
      state.currentNote = action.payload;
    },
    closeEditor(state) {
      state.isOpened = false;
      state.currentNote = null;
    },
  },
});

export const selectIsOpen = (state) => state.editorInfo.isOpened;
export const selectEditedNote = (state) => state.editorInfo.currentNote;

export const { addNote, changeNote, closeEditor } = editorSlice.actions;
export default editorSlice.reducer;
