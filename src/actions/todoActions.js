import { ADD_TODO, SUBMIT_NEW_TODO, DELETE_TODO } from './type';

export const addNewTodo = todoText => dispatch => {
  dispatch({
    type: ADD_TODO,
    payload: {
      id: Date.now(),
      text: todoText
    }
  })
};

export const submitNewTodo = () => dispatch => {
  dispatch({
    type: SUBMIT_NEW_TODO
  }
  )
};

export const deleteTodo = todoID => dispatch => {
  dispatch({
    type: DELETE_TODO,
    id: todoID
  })
}