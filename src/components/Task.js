import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Task extends Component{

    StyleCompleted = () => {
        return {
            color: this.props.task.done ? 'green' :  '#000',
            fontSize: '20px',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render(){

        const { task } = this.props;

        return (
            <div>
                <p key={task.id} style={this.StyleCompleted()}> 
                    {task.title} : {task.description}
                </p>
                <input type="checkbox" defaultChecked={task.done} onChange={this.props.checkDone.bind(this, task.id)}/>
                <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>x</button>
            </div>
        )
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

const btnDelete = {
    backgroundColor: '#bababa',
    border: 'none',
    borderRadius: '5px',
    color: '#FFF',
    cursor: 'pointer',
    fontSize: '18px'
}

export default Task;