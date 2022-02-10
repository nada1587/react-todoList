import React, { useState, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { todoAdd } from '../actions'
import { MdAdd } from 'react-icons/md';
import styled from "styled-components";

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
    <TodoInput onSubmit={onAddTodos}>
      <input
        placeholder="할 일을 입력하세요."
        value={inputText}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </TodoInput>
  );
};

const TodoInput = styled.form`
  display: flex;
  > input {
    flex: 1;
    border: none;
    background: none;
    outline: none;
    padding: 15px;
    color: thistle;
    &::placeholder {
      color: thistle;
    }
  }
  > button {
    display: flex;
    background: thistle;
    color: #fff;
    padding: 15px;
    align-items: center;
    cursor: pointer;
  }
`;

export default TodoInsert;