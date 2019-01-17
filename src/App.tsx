import * as React from 'react';
import { Grid, Row } from 'react-bootstrap';
import TaskForm, { ITask } from './components/TasksForm';
import TasksList from './components/TasksList';

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
    this.deleteTask = this.deleteTask.bind(this);
  }
  
  addNewTask(newTask: ITask) {
    this.setState({ 
      tasks: [...this.state.tasks, newTask] 
    })
  }

  deleteTask(id:number) {
    this.setState({ 
      tasks: this.state.tasks.filter((task:ITask) => task.id!==id) 
    });
  }

  render(): JSX.Element {
    const { title } = this.props;
    const { tasks } = this.state;
    return (
      <Grid>
        <h1>{ title }</h1>
        <Row>
          <TaskForm addNewTask={this.addNewTask}/>
          <TasksList tasks={tasks} deleteTask={this.deleteTask}/>
        </Row>
        </Grid>
    )
  }
}