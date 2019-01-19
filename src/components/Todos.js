import React, { Component } from "react";
import { connect } from 'react-redux';
import TodoItems from "../components/TododItem";
import { addNewTodo, submitNewTodo } from '../actions/todoActions'
class Todos extends Component {
  // state = {
  //   newTodo: {},
  //   todos: []
  // };

  // handleTodoChange = event => {
  //   let newTodo = {
  //     id: Date.now(),
  //     text: event.target.value
  //   };
  //   this.setState({ newTodo });
  // };

  // submitNewTodo = event => {
  //   event.preventDefault();
  //   this.setState({
  //     todos: [...this.state.todos, this.state.newTodo],
  //     newTodo: {}
  //   });
  // };

  // deleteTodo = id => {
  //   let filterTodos = this.state.todos.filter(todo => {
  //     return todo.id !== id;
  //   });
  //   this.setState({
  //     todos: filterTodos
  //   });
  // };
  render() {
    //console.log(this.props)
    const { todos } = this.props;
    return (
      <div className="App">
        <div className="container">
          <header>
            <h1>To Do List</h1>
          </header>
          <form onSubmit={(e) => this.props.submitNewTodo(e.preventDefault())}>
            <input
              className="input_field"
              type="text"
              placeholder="Enter Task...."
              value={this.props.newTodo.text || ""}
              onChange={(event) => this.props.addNewTodo(event.target.value)}
              autoFocus
            />
          </form>
          <TodoItems />
          <output style={{ display: todos.length === 0 ? "none" : "flex" }}>
            {todos.length}
          </output>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newTodo: state.todos.todo,
    todos: state.todos.allTodo
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addNewTodo: (todoText) => dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), text: todoText } }),
//     submitNewTodo: () => dispatch({ type: 'SUBMIT_NEW_TODO' })
//   }
// }

export default connect(mapStateToProps, { submitNewTodo, addNewTodo })(Todos);
