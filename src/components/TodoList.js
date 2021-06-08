import React from 'react';
import PropTypes from 'prop-types';
import { MdSentimentDissatisfied, MdSentimentSatisfied } from 'react-icons/md';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ title, todos, onCheck, onDelete }) => {
  return (
    <div className="todo-list-wrap">
      <h2>
        {title} {title === '해야할 일' ? <MdSentimentDissatisfied /> : <MdSentimentSatisfied />}
      </h2>
      <ul>
        {
          todos.length >= 1 ? (
            todos.map((todo) => (
              <TodoListItem todo={todo} key={todo.id} onCheck={onCheck} onDelete={onDelete} />
            ))
          ) : (
            <li>작성된 일정이 없습니다.</li>
          )
        }
      </ul>
    </div>
  );
};
// todoList에서 defaultProps를 지정하는건 todoList 컴포넌트 사용시 props 값이 없어 오류가 나는 경우를 대비해 기본값을 지정하는 것
TodoList.defaultProps = {
  todos: [],
}
TodoList.propTypes = {
  todos: PropTypes.array,
}

export default TodoList;