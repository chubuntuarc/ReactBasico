import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

//Components
import tasks from './sample/task.json';
import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm';
import Posts from './components/Posts'

class App extends Component{

  state = {
    tasks: tasks
  } 

  addTask = task => {
    const newTask = {
      id: this.state.tasks.length,
      title: task.title,
      description: task.description
    }

    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = taskId => {
    const newTasks = this.state.tasks.filter(task => task.id !== taskId)
    this.setState({
      tasks: newTasks
    })
  }

  checkDone = taskId => {
    const newTasks = this.state.tasks.map(task => { 
      if (task.id === taskId) task.done = !task.done 
      return task
    });
    this.setState({
      tasks: newTasks
    })
  }

  render() {
    return (
      <Router>

      <Link to="/">Home </Link>
      <Link to="/posts"> Posts</Link>

      <Route
        exact
        path="/"
        render={() => {
          return (
            <div>
              <TaskForm addTask={this.addTask} />
              <Tasks
                tasks={this.state.tasks}
                deleteTask={this.deleteTask}
                checkDone={this.checkDone}
              />
            </div>
          );
        }}
        ></Route>

        <Route path="/post" render={() => {
          return <Posts />
        }}>
        </Route>

      </Router>
    );
  }
}

export default App;
