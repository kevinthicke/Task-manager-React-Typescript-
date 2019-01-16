import * as React from 'react';
import { Grid } from 'react-bootstrap';
import TaskForm, { ITask } from './components/TaskForm';

interface AppProps {
  title: string
}

interface AppStates {
  tasks: Array<ITask>
}

export default class App extends React.Component <AppProps, AppStates> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      tasks: []
    }

    this.addNewTask = this.addNewTask.bind(this);
  }
  
  addNewTask(newTask: ITask) {
    const _tasks = newTask; 
    this.setState({ tasks: [...this.state.tasks, _tasks] })
  }

  render() {
    const { title } = this.props;
    console.log(this.state);
    return (
      <Grid>
        <h1>{ title }</h1>
        <TaskForm addNewTask={this.addNewTask}/>
      </Grid>
    )
  }
}