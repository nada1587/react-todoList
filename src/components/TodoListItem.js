import { React, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { todoCheck, todoDelete } from '../actions';
import { 
  MdCheckBoxOutlineBlank,
  MdCheckBox,
} from 'react-icons/md';
import styled from "styled-components";
import classNames from 'classnames';

const TodoListItem = ({ todo }) => {
  const dispatch = useDispatch();

  const onTodoCheck = useCallback(() => {
    dispatch(todoCheck(todo.id));
  }, [dispatch, todo.id]);

  const onTodoDelete = useCallback(e => {
    e.preventDefault();
    dispatch(todoDelete(todo.id));
  }, [dispatch, todo.id]);

  const isFinish = todo.isFinish;

  return (
    <>
      <TodoItem className={classNames({isFinish})}>
        <span onClick={onTodoCheck}>
          {todo.isFinish ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <em className="text">{todo.text}</em>
        </span>
        <SmallBtn type="button" onClick={onTodoDelete}>삭제</SmallBtn>
      </TodoItem>
    </>
  );
};

const TodoItem = styled.li`
  display: flex;
  color: #563d7c;
  align-items: center;
  vertical-align: middle;
  > span {
    flex: 1;
    position: relative;
    display: inline-block;
    padding-left: 23px;
    > svg {
      position: absolute;
      left: 0;
      top: 50%;
      width: 20px;
      height: 20px;
      margin-top: -10px;
      color: #563d7c;
    }
    > em {
      display: inline-block;
      margin-top: 1px;
      font-size: 14px;
    }
  }
  &.isFinish {
    em {
      text-decoration: line-through;
    }
  }
  &+li {
    padding-top: 10px;
  }
`;

const SmallBtn = styled.button`
  display: inline-block;
  padding: 2px 3px;
  border: none;
  border-radius: 4px;
  background: #563d7c;
  color: #fff;
  font-size: 12px;
`;

export default TodoListItem;