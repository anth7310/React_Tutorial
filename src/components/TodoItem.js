import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: 'lightgray',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    // checkbox True if completed
    getChecked = () => {
        return this.props.todo.completed ? true : false
    }

    render() {
        // destructuring
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' 
                    defaultChecked={this.getChecked()} 
                    onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    boarderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;