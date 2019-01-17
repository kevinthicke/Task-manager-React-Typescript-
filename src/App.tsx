import * as React from 'react';
import { Grid } from 'react-bootstrap';
import TaskList from './components/TaskList';
import TaskFormContainer from './containers/TaskFormContainer';
import Header from './components/Header';

export default class App extends React.Component <any, any> {
  render() {
    return (
      <Grid>
        <Header title={'Task manager App'} link="#"/>
        <TaskFormContainer />
        <TaskList />
      </Grid>
    )
  }
}