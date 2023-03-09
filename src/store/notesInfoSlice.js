/* eslint-disable no-param-reassign */
import { createSelector, createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notesInfo',
  initialState: {
    notes: [
      {
        id: '61606be1-2c97-475a-9f61-5e8d9565ebde',
        title: 'Тестовое задание',
        body: '<p><strong>Тестовое задание</strong></p> <p>Функционал:</p> <ul> <li>создание заметок</li> <li>удаление заметок</li> <li>редактирование заметок</li> <li>сохранение заметок между сеансами</li> </ul> <p>В разработке были использованы билиотеки:</p> <ul> <li>React</li> <li>Redux</li> <li>react-draft-wysiwyg</li> <li>draft-js</li> <li>draftjs-to-html</li> <li>dompurify</li> <li>uuid</li> <li>prop-types</li> </ul>',
      },
    ],
    currentNote: '61606be1-2c97-475a-9f61-5e8d9565ebde',
  },
  reducers: {
    add(state, action) {
      state.notes.push({
        id: action.payload.id,
        title: action.payload.title,
        body: action.payload.body,
      });
      localStorage.setItem('data', JSON.stringify(state.notes));
    },
    change(state, action) {
      const { id, note } = action.payload;
      const index = state.notes.map((item) => item.id === id).indexOf(true);
      state.notes[index] = note;
      localStorage.setItem('data', JSON.stringify(state.notes));
    },
    remove(state, action) {
      const id = action.payload;
      state.notes = state.notes.filter((note) => note.id !== id);
      if (id === state.currentNote) {
        state.currentNote = state.notes.length > 0 ? state.notes[0].id : null;
      }
      localStorage.setItem('data', JSON.stringify(state.notes));
    },
    setCurrentNote(state, action) {
      state.currentNote = action.payload;
    },
    initialization(state, action) {
      state.notes = action.payload;
    },
  },
});

export const selectAllNotes = (state) => state.notesInfo.notes;
export const selectIdCurrentNote = (state) => state.notesInfo.currentNote;
export const selectCurrentNote = createSelector(
  selectAllNotes,
  selectIdCurrentNote,
  (allNotes, idCurrentNote) => {
    const [currentNote] = allNotes.filter((notes) => notes.id === idCurrentNote);
    return currentNote;
  },
);

export const {
  add, change, remove, setCurrentNote, initialization,
} = notesSlice.actions;
export default notesSlice.reducer;
