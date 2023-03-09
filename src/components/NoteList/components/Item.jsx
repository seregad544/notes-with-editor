import { React } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setCurrentNote } from '../../../store/notesInfoSlice';
import '../styles.css';

function Item(props) {
  const { id, content, active } = props;
  const dispath = useDispatch();
  const handlerClick = (e) => dispath(setCurrentNote(e.currentTarget.id));

  return (
    <div
      id={id}
      className={active ? 'note-list__item note-list__item_active' : 'note-list__item'}
      role="menuitem"
      onClick={handlerClick}
      onKeyPress={handlerClick}
      tabIndex={0}
    >
      {content}
    </div>
  );
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Item;
