import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import TaskList from './components/TaskList';
import TaskFormContainer from './containers/TaskFormContainer';
import Header from './components/Header';

const TaskContainerStyle: React.CSSProperties = {
  display: 'grid',
  gridGap: '10px',
  gridTemplateColumns: '1fr 1fr 1fr 1fr'
}

export default class App extends React.Component <any, any> {
  render() {
    return (
      <Grid>
        <Row>
          <Header title={'Task manager App'} link="#"/>
        </Row>
        <Row>
            <div style={TaskContainerStyle}>
              <TaskFormContainer/>
              <TaskList />  
            </div>
          </Row>
      </Grid>
    )
  }
}