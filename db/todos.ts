import Todo from '../interfaces/Todo.ts'
import { v4 } from 'https://deno.land/std/uuid/mod.ts'

let todos: Todo[] = [
  { id: v4.generate(), todo: 'Walk Dog', isCompleted: true },
  { id: v4.generate(), todo: 'Eat Lunch', isCompleted: false }
]

export default todos
