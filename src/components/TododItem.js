import React from "react";
import { connect } from 'react-redux';
import { deleteTodo } from '../actions/todoActions'

const TodoItems = ({ todosList, deleteTodo }) => {
  return (
    <ul className="list">
      {todosList.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <span onClick={() => deleteTodo(todo.id)}>X</span>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    todosList: state.todos.allTodo
  }
}

// const matDispatchToProps = dispatch => {
//   return {
//     deleteTodo: (todoID) => dispatch({ type: 'DELETE_TODO', id: todoID })
//   }
// }

export default connect(mapStateToProps, { deleteTodo })(TodoItems);
