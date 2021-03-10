import { Application } from 'https://deno.land/x/oak/mod.ts'
import todosRouter from './routes/todos.ts'

const app = new Application()
const port: number = 8080

app.use(todosRouter.routes())
app.use(todosRouter.allowedMethods())

console.log('running on port ', port)
await app.listen({ port })
