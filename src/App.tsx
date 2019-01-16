import * as React from 'react';
import { Grid } from 'react-bootstrap';
import TaskForm, { ITask } from './components/TaskForm';

interface AppProps {
  title: string
}

interface AppStates {
  tasks: Array<any>
}

export default class App extends React.Component <AppProps, AppStates> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      tasks: []
    }
  }
  
  addNewTask(newTask: ITask) {
    console.log(newTask);
  }

  render() {
    const { title } = this.props;
    return (
      <Grid>
        <h1>{ title }</h1>
        <TaskForm addNewTask={this.addNewTask}/>
      </Grid>
    )
  }
}