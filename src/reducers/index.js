import { TODO_ADD, TODO_CHECK, TODO_DELETE } from "../actions"

// Actions에 저장된 상태에 대한 약속된 작업을 처리하는 작업처리자 -> 상태관리

// state
const initialState = {
  todos: [],
  completed: []
}

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case TODO_ADD:
      return {
        ...state,
        todos: state.todos.concat({
          id: action.id,
          text: action.text,
          isFinish: action.isFinish,
        })
      }
    case TODO_CHECK:
      const done = state.todos.map(todos => todos.id === action.id ? {...todos, isFinish: !todos.isFinish} : todos).filter(todos => todos.isFinish === true);
      const back = state.completed.map(todos => todos.id === action.id ? {...todos, isFinish: !todos.isFinish} : todos).filter(todos => todos.isFinish === false);
      return {
        ...state,
        todos: state.todos.filter(todos => todos.id !== action.id).concat(back),
        completed: state.completed.filter(todos => todos.id !== action.id).concat(done)
      };
    case TODO_DELETE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id),
        completed: state.completed.filter(todo => todo.id !== action.id)
      }
    default:
      return state;
  }
}

export default todoReducer;