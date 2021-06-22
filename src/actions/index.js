export const TODO_ADD = "TODO/TODO_ADD"
export const TODO_CHECK = "TODO/TODO_CHECK"
export const TODO_DELETE = "TODO/TODO_DELETE"

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