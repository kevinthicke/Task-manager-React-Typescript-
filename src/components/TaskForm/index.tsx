import * as React from 'react';
import { Button, FormGroup, ControlLabel, FormControl, Well } from 'react-bootstrap';
import { ITask, IFormAttributes } from '../../interfaces';
import FormItem from './FormItem';

const TaskFormStyle: React.CSSProperties = {
  width: '300px',
  margin: '20px'
}

interface TaskFormStates {
    title: string,
    description: string
}

interface TaskFormProps {
    addNewTask: (newTask: ITask) => void
}

export default class TaskForm extends React.Component <TaskFormProps,TaskFormStates> {
    constructor(props: TaskFormProps) {
        super(props);
        this.state = {
          title: '',
          description: ''
        }
    
        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleFormOnChange = this.handleFormOnChange.bind(this);
      }
    
      handleAddTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    
        this.props.addNewTask(this.state);
      }
      
      handleFormOnChange({ nameFormAttribute, valueFormAttribute }: IFormAttributes) {
        this.setState({ 
          ...this.state, 
          [nameFormAttribute]: valueFormAttribute 
        });
      }

      render() {
        return (
          <Well style={TaskFormStyle}>
            <form onSubmit={event => this.handleAddTask(event)}>
              <FormItem handleFormOnChange={this.handleFormOnChange} name={'title'} componentClass="input"/>
              <FormItem handleFormOnChange={this.handleFormOnChange} name={'description'} componentClass="textarea"/>
              <Button type="submit" bsStyle="primary">Save</Button>
            </form>
          </Well>
        )
    }
} 