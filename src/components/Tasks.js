import React, {Component} from 'react';
//Components
import Task from '../components/Task'

class Tasks extends Component{
    render(){
        return (
           this.props.tasks.map(item => 
               <Task key={item.id} task={item} deleteTask={this.props.deleteTask} checkDone={this.props.checkDone}/>
          )
        ) 
    }
}

export default Tasks;