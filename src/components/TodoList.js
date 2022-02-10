import React from 'react';
import PropTypes from 'prop-types';
import { MdSentimentDissatisfied, MdSentimentSatisfied } from 'react-icons/md';
import TodoListItem from './TodoListItem';
import styled from "styled-components";

const TodoList = ({ title, todos }) => {
  return (
    <TodoListWrap>
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
    </TodoListWrap>
  );
};
// todoList에서 defaultProps를 지정하는건 todoList 컴포넌트 사용시 props 값이 없어 오류가 나는 경우를 대비해 기본값을 지정하는 것
TodoList.defaultProps = {
  todos: [],
}
TodoList.propTypes = {
  todos: PropTypes.array,
}

const TodoListWrap = styled.div`
  padding: 20px 10px;
  border-top: 1px solid thistle;
  > h2 {
    position: relative;
    display: inline-block;
    padding-right: 23px;
    color: #563d7c;
    font-size: 16px;
    svg {
      position: absolute;
      top: -2px;
      right: 0;
      width: 20px;
      height: 20px;
    }
  }
  ul {
    margin-top: 12px;
    li {
      color: #563d7c;
    }
  }
`;

export default TodoList;