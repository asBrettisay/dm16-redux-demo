import React, { Component } from 'react';
import { addTodo } from './redux/todos';
import store from './store';
import { connect } from 'react-redux';

class AddTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newTodo: ''
    }

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      newTodo: event.target.value
    })
  }

  handleAddTodo() {
    store.dispatch({
      type: 'ADD_TODO',
      payload: this.state.newTodo
    })
  }

  render() {
    return (
      <div>
        <input 
          value={this.state.newTodo} 
          onChange={this.handleChange} />
        <button
         onClick={this.handleAddTodo}>Add to do</button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  addTodo: addTodo
}

export default connect(null, mapDispatchToProps)(AddTodo)