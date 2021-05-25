import React from 'react';
import { 
  MdCheckBoxOutlineBlank,
  MdCheckBox,
} from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = ({ todo }) => {
  const {text, isFinish} = todo;
  return (
    <>
      <li>
        <span>
          {isFinish ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <em className="text">{text}</em>
        </span>
        <button type="button">삭제</button>
      </li>
    </>
  );
};

export default TodoListItem;