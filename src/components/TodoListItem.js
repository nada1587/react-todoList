import { React, useCallback } from 'react';
import { 
  MdCheckBoxOutlineBlank,
  MdCheckBox,
} from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onCheck, onDelete }) => {
  const {id, text, isFinish} = todo;
  const onClick = useCallback(
    e => {
      onCheck(id, text, isFinish);
    },
    [id, text, isFinish, onCheck],
  )

  return (
    <>
      <li className={isFinish ? 'isFinish' : ''}>
        <span onClick={onClick}>
          {isFinish ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <em className="text">{text}</em>
        </span>
        <button type="button" onClick={() =>onDelete(id)}>삭제</button>
      </li>
    </>
  );
};

export default TodoListItem;