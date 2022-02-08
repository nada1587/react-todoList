import React from 'react';
import { useSelector } from 'react-redux';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import './TodoContainer.scss';

const TodoContainer = () => {
  // 여기서 state는 index.js에서 redux로 createStore할때 rootReducer 넣어준 initialState를 useSelector를 통해 접근
  const todos = useSelector(state => state.todos);
  const completed = useSelector(state => state.completed);
  return (
    <div className="todo-wrap">
      <h1>리액트로 Todo 리스트 만들기</h1>
      <div>
        <TodoInsert />
        <TodoList title="해야할 일" todos={todos} />
        <TodoList title="완료한 일" todos={completed} />
      </div>
    </div>
  );
};

export default TodoContainer;