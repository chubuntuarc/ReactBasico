import React, {Component} from 'react';

class TaskForm extends Component{

    state = {
        title: '',
        description: ''
    }

    onSubmit = event => {
        event.preventDefault();
        this.props.addTask({
            title: this.state.title,
            description: this.state.description
        })
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <input name="title" type="text" placeholder="Write a task" onChange={this.onChange} value={this.state.title}/>
                <br/><br/>
                <textarea name="description" placeholder="Write task description" onChange={this.onChange} value={this.state.description}/>
                <br/><br/>
                <button type="submit">Create Task</button>
            </form>
        )
    }
}

export default TaskForm;