import * as React from 'react';
import { Grid } from 'react-bootstrap';
import TaskForm from './components/TaskForm';

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
  
  render() {
    const { title } = this.props;
    return (
      <Grid>
        <h1>{ title }</h1>
        <TaskForm/>
      </Grid>
    )
  }
}