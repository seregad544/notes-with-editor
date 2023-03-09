import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeNote, closeEditor, selectIsOpen } from '../../../store/editorInfoSlice';
import { remove, selectIdCurrentNote } from '../../../store/notesInfoSlice';
import '../styles.css';

function Toolbar() {
  const idCurrentNote = useSelector(selectIdCurrentNote);
  const dispatch = useDispatch();
  const editorIsOpen = useSelector(selectIsOpen);

  const handlerRemove = () => dispatch(remove(idCurrentNote));

  const handlerEdit = () => dispatch(changeNote(idCurrentNote));

  const handlerClose = () => dispatch(closeEditor());

  return (
    <div className="head__toolbar">
      {editorIsOpen ? (
        <div
          role="button"
          onClick={handlerClose}
          onKeyPress={handlerClose}
          tabIndex={0}
        >
          <img
            className="head__toolbar-item head__toolbar-item_cross"
            src="./images/icons/close.png"
            alt="close"
          />
        </div>
      ) : (
        <>
          <div
            role="button"
            onClick={handlerEdit}
            onKeyPress={handlerEdit}
            tabIndex={0}
          >
            <img
              className="head__toolbar-item"
              src="./images/icons/edit.png"
              alt="edit"
            />
          </div>
          <div
            role="button"
            onClick={handlerRemove}
            onKeyPress={handlerRemove}
            tabIndex={0}
          >
            <img
              className="head__toolbar-item"
              src="./images/icons/recycle.png"
              alt="recycle"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Toolbar;
