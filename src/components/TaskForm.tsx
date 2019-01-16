import * as React from 'react';
import { Button, FormGroup, FormControl, ControlLabel, FormControlProps} from 'react-bootstrap';

interface TaskFormStates {
    title: string,
    description: string
}

export interface ITask {
    title: string
}

interface TaskFormProps {
    addNewTask: (task: ITask) => void;
}

export default class TaskForm extends React.Component <TaskFormProps, TaskFormStates> {
    constructor(props:TaskFormProps) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const { title } = this.state;
        const newTask: ITask = { 
            title
        }

        this.props.addNewTask(newTask);
    }

    handleOnChange(event: React.FormEvent<FormControl>) {
        const { value, name } = event.target as HTMLInputElement;

        this.setState({ ...this.state, [name]: value })
    }

    render() {
        console.log(this.state);
        return (
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
                <FormGroup>
                    <ControlLabel>Task title</ControlLabel>
                    <FormControl type="text"
                                 name="title"
                                 onChange={this.handleOnChange}/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Task title</ControlLabel>
                    <FormControl type="text"
                                 name="description"
                                 onChange={this.handleOnChange}/>
                </FormGroup>    
                <Button type="submit" bsStyle="primary">Save</Button>
            </form>            
        );
    }
}
