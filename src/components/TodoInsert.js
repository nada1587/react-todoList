import React, { useState, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { todoAdd } from '../actions'
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
  const [inputText, setInputText] = useState('');
  const nextId = useRef(1);
  const dispatch = useDispatch();
  const onChange = useCallback((e) => {
    setInputText(e.target.value)
  }, []);
  const onAddTodos = useCallback((e) => {
    e.preventDefault();
    dispatch(todoAdd(nextId.current, inputText));
    nextId.current += 1;
    setInputText('');
  }, [dispatch, inputText]);

  return (
    <form className="todo-input" onSubmit={onAddTodos}>
      <input
        placeholder="할 일을 입력하세요."
        value={inputText}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;