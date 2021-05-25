import React, { useState, useRef, useCallback } from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import './TodoContainer.scss';

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(1);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        isFinish: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos, setTodos],
  );

  return (
    <div className="todo-wrap">
      <h1>리액트로 Todo 리스트 만들기</h1>
      <div>
        <TodoInsert onInsert={onInsert} />
        <TodoList title="해야할 일" todos={todos} />
        <TodoList title="완료한 일" />
      </div>
    </div>
  );
};

export default TodoContainer;