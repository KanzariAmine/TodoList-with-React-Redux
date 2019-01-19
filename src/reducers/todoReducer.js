import { ADD_TODO, SUBMIT_NEW_TODO, DELETE_TODO } from '../actions/type'
const initialState = {
  todo: {},
  allTodo: []
}
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log('Add_Todo')
      return {
        ...state,
        todo: action.payload
      }
    case SUBMIT_NEW_TODO:
      return {
        ...state,
        allTodo: state.allTodo.concat(state.todo),
        todo: {}
      }
    case DELETE_TODO: {
      let filterTodos = state.allTodo.filter(todo => {
        return todo.id !== action.id
      })
      return {
        ...state,
        allTodo: filterTodos
      }
    }
    default:
      return state;
  }
}
export default todoReducer;