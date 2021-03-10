import { Router } from 'https://deno.land/x/oak/mod.ts'
import todosController from '../controllers/todos.ts'
const router = new Router()

router
  .get('/todos', todosController.getAllTodos)
  .post('/todos', todosController.createTodo)
  .get('/todos/:id', todosController.getTodo)
  .put('/todos/:id', todosController.updateTodo)
  .delete('/todos/:id', todosController.deleteTodo)

export default router
