import * as React from 'react';
import { Button, FormGroup, FormControl, ControlLabel, FormControlProps} from 'react-bootstrap';

interface TaskFormStates {
    title: string
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
        }

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const { title } = this.state;
        const newTask: ITask = { title: title as string }

        this.props.addNewTask(newTask);
    }

    handleOnChange(event: React.FormEvent<FormControl>) {
        const { value } = event.target as HTMLInputElement;

        this.setState({
            title: value
        })
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
                <FormGroup>
                    <ControlLabel>Task title</ControlLabel>
                    <FormControl type="text" label="Task title" onChange={this.handleOnChange}/>
                </FormGroup>    
                <Button type="submit" bsStyle="primary">Save</Button>
            </form>            
        );
    }
}
