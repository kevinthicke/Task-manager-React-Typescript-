import * as React from 'react';
import { Grid, Row } from 'react-bootstrap';
import TaskList from './components/TaskList';
import TaskFormContainer from './containers/TaskFormContainer';
import Header from './components/Header';


export default class App extends React.Component <any, any> {
  render() {
    return (
      <Grid>
        <Row>
          <Header title={'Task manager App'} link="#"/>
        </Row>
        <Row>
          <TaskFormContainer />
        </Row>
        <TaskList />
      </Grid>
    )
  }
}