

const initialState = {
  todos: [
    {
      name: 'Teach Redux',
      complete: false
    },
    {
      name: 'Pick up Milk from the grocery store',
      complete: false
    },
    {
      name: 'Walk the dog',
      complete: true
    }
  ]
}

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case 'ADD_TODO':
      const newTodo = {
        name: action.payload,
        complete: false
      };


      return Object.assign({}, state, {todos: [...state.todos, newTodo]})
    
    case 'COMPLETE_TODO':
      const todos = state.todos.map(todo => {
        if (todo.name === action.payload) {
          todo.complete = !todo.complete
        }
        return todo;
      });

      return Object.assign({}, state, {todos: todos})
    default:
      return state;
  }
}


export function completeTodo(name) {
  return {
    type: 'COMPLETE_TODO',
    payload: name
  }
}

export function addTodo(name) {
  return {
    type: 'ADD_TODO',
    payload: name
  }
}