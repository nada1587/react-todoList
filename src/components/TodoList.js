import React from 'react';
import { MdSentimentDissatisfied, MdSentimentSatisfied } from 'react-icons/md';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ title, todos }) => {
  return (
    <div className="todo-list-wrap">
      <h2>
        {title} {title === '해야할 일' ? <MdSentimentDissatisfied /> : <MdSentimentSatisfied />}
      </h2>
      <ul>
        {
          todos.length >= 1 ? (
            todos.map((todo) => (
              <TodoListItem todo={todo} key={todo.id} />
            ))
          ) : (
            <li>작성된 일정이 없습니다.</li>
          )
        }
      </ul>
    </div>
  );
};
TodoList.defaultProps = {
  todos: [],
}

export default TodoList;