import { React, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { todoCheck, todoDelete } from '../actions';
import { 
  MdCheckBoxOutlineBlank,
  MdCheckBox,
} from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = ({ todo }) => {
  const dispatch = useDispatch();

  const onTodoCheck = useCallback(() => {
    dispatch(todoCheck(todo.id));
  }, [dispatch, todo.id]);

  const onTodoDelete = useCallback(e => {
    e.preventDefault();
    dispatch(todoDelete(todo.id));
  }, [dispatch, todo.id]);

  return (
    <>
      <li className={todo.isFinish ? 'isFinish' : ''}>
        <span onClick={onTodoCheck}>
          {todo.isFinish ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <em className="text">{todo.text}</em>
        </span>
        <button type="button" onClick={onTodoDelete}>삭제</button>
      </li>
    </>
  );
};

export default TodoListItem;