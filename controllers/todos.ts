import todos from '../db/todos.ts'

export default {
  getAllTodos: ({ response }: { response: any }) => {
    response.status = 200
    response.body = { todos: todos }
  },
  createTodo: async () => {},
  getTodo: () => {},
  updateTodo: async () => {},
  deleteTodo: () => {}
}
