import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeTodo } from './redux/todos';

class Todos extends Component {


  render() {
    console.log(this.props);

    function handleClick(name) {
      this.props.completeTodo(name);
    }


    const todos = this.props.todos.map((todo, i) => {
      return (
        <li 
          key={i}
          className={todo.complete ? 'complete' : null}
          onClick={handleClick.bind(this, todo.name)}>{todo.name}</li>
      )
    })

    return (
      <div>
        <ul>
          {todos}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {

  console.log('State change detected!');
  return {
    todos: state.todos.todos
  }
}

const mapDispatchToProps = {
  completeTodo: completeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)