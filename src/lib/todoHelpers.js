export const addTodo = (item, list) => [...list, item]

export const findById = (id, list) => list.find(item => item.id === id)

export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete})

export const toggleById = (id, list) => list.map(t => t.id === id ? toggleTodo(t) : t)

export const updateTodo = (updated, list) => list.map(t => t.id === updated.id ? updated : t)

export const removeTodo = (id, list) => list.map(t => t.id === id ? null : t).filter(Boolean)

export const filterTodos = (filter, list) => {
  switch(filter){
    case 'active':
      return list.filter(item => !item.isComplete)
    case 'complete':
      return list.filter(item => item.isComplete)
    default:
      return list
  }
}
