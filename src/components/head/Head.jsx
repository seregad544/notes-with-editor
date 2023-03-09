import { React } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../store/editorInfoSlice';
import Toolbar from './componets/Toolbar';
import './styles.css';

function Head() {
  const dispatch = useDispatch();

  const handlerClick = () => dispatch(addNote());

  return (
    <div className="head__container">
      <button type="button" className="head__button-add" onClick={handlerClick}>добавить заметку</button>
      <Toolbar />
    </div>
  );
}

export default Head;
