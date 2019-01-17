import * as React from 'react';
import { Button, FormGroup, ControlLabel, FormControl, Well } from 'react-bootstrap';
import { ITask } from '../../interfaces';

const TaskFormStyle = {
  width: '300px'
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
        this.handleOnChange = this.handleOnChange.bind(this);
      }
    
      handleOnChange(event: React.FormEvent<FormControl>) {
        const { value, name } = event.target as HTMLInputElement;
    
        this.setState({ ...this.state, [name]: value })
      }
    
      handleAddTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    
        this.props.addNewTask(this.state);
      }
      
      render() {
        const { title, description } = this.state;

        return (
          <Well style={TaskFormStyle}>
            <form onSubmit={event => this.handleAddTask(event)}>
                    <FormGroup>
                        <ControlLabel>Title</ControlLabel>
                        <FormControl type="text"
                                     name="title"
                                     value={title}
                                     onChange={this.handleOnChange}/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Description</ControlLabel>
                        <FormControl type="text"
                                     componentClass="textarea"
                                     value={description} 
                                     name="description"
                                     onChange={this.handleOnChange}/>
                    </FormGroup>    
                    <Button type="submit" bsStyle="primary">Save</Button>
            </form>
          </Well>
        )
    }
} 