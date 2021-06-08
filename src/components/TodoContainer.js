import React, { useState, useRef, useCallback } from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import './TodoContainer.scss';

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);
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

  const onCheck = useCallback(
    (id, text, isFinish) => {
      const selected = {
        id,
        text,
        isFinish,
      }
      const done = todos.map(item => item.id === selected.id ? {...item, isFinish: !item.isFinish} : item).filter(item => item.isFinish === true);
      const back = completed.map(item => item.id === selected.id ? {...item, isFinish: !item.isFinish} : item).filter(item => item.isFinish === false);
      setTodos(todos.filter(item => item.id !== selected.id).concat(back));
      setCompleted(completed.filter(item => item.id !== selected.id).concat(done));
    },
    [todos, completed],
  )

  const onDelete = useCallback(
    (id) => {
      setTodos(todos.filter(item => item.id !== id));
      setCompleted(completed.filter(item => item.id !== id));
    },
    [todos, completed],
  )

  return (
    <div className="todo-wrap">
      <h1>리액트로 Todo 리스트 만들기</h1>
      <div>
        <TodoInsert onInsert={onInsert} />
        <TodoList title="해야할 일" todos={todos} onCheck={onCheck} onDelete={onDelete}/>
        <TodoList title="완료한 일" todos={completed}  onCheck={onCheck} onDelete={onDelete}/>
      </div>
    </div>
  );
};

export default TodoContainer;