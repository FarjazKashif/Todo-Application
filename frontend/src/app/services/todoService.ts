// frontend/src/services/todoService.ts
export const getTodos = async () => {
  const res = await fetch('http://localhost:3000/api/todos')
  if (!res.ok) throw new Error('Failed to fetch todos')
  return res.json()
}

export const createTodo = async (todo: { title: string, description: string }) => {
  const res = await fetch('http://localhost:3000/api/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo)
  })
  if (!res.ok) throw new Error('Failed to create todo')
  return res.json()
}