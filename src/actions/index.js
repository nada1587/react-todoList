export const TODO_ADD = "TODO/TODO_ADD"
export const TODO_CHECK = "TODO/TODO_CHECK"
export const TODO_DELETE = "TODO/TODO_DELETE"


// 어플리케이션 전역에서 접근 가능한 특정 작업을 시작하게 하는 키 -> 상태
export const todoAdd = ( id, text) => {
  return {
    type: TODO_ADD,
    id,
    text,
    isFinish: false,
  }
}

export const todoCheck = (id) => {
  return {
    type: TODO_CHECK,
    id,
  }
}

export const todoDelete = (id) => {
  return {
    type: TODO_DELETE,
    id,
  }
}