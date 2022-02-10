import React from 'react';
import { useSelector } from 'react-redux';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import Calendar from './Calendar';
import styled from "styled-components";

const TodoContainer = () => {
  // 여기서 state는 index.js에서 redux로 createStore할때 rootReducer 넣어준 initialState를 useSelector를 통해 접근
  const todos = useSelector(state => state.todos);
  const completed = useSelector(state => state.completed);

  return (
    <TodoWrap>
      <h1>리액트로 Todo 리스트 만들기</h1>
      <div>
        <Calendar />
        <TodoInsert />
        <TodoList title="해야할 일" todos={todos} />
        <TodoList title="완료한 일" todos={completed} />
      </div>
    </TodoWrap>
  );
};

const TodoWrap = styled.div`
  display: inline-block;
  width: 375px;
  border: 1px solid #563d7c;
  margin: auto;
  background: #fff;
  vertical-align: middle;
  > h1 {
    padding: 20px;
    background: #563d7c;
    color: #fff;
    font-size: 20px;
    text-align: center;
  }
`;

export default TodoContainer;