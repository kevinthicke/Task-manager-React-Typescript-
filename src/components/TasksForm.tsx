import * as React from 'react';
import { Button, FormGroup, FormControl, ControlLabel, FormControlProps} from 'react-bootstrap';

const TaskFormStyle: React.CSSProperties = {
    width: '400px',
    margin: '20px'
}

interface TaskFormStates {
    id: number,
    title: string,
    description: string
}

export interface ITask {
    id: number,
    title: string,
    description: string
}

interface TaskFormProps {
    addNewTask: (task: ITask) => void;
}

export default class TaskForm extends React.Component <TaskFormProps, TaskFormStates> {
    constructor(props: TaskFormProps) {
        super(props);
        this.state = {
            id: 0,
            title: '',
            description: ''
        }

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    getCurrentTime = (): number => {
        const date = new Date();
        return date.getTime();
    }

    handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const { title, description } = this.state;
        
        const newTask: ITask = { 
            id: this.getCurrentTime(),
            title,
            description
        }

        this.props.addNewTask(newTask);
    }

    handleOnChange(event: React.FormEvent<FormControl>) {
        const { value, name } = event.target as HTMLInputElement;

        this.setState({ ...this.state, [name]: value })
    }

    render(): JSX.Element {
        return (
            <form onSubmit={(event) => this.handleOnSubmit(event)} style={TaskFormStyle}>
                <FormGroup>
                    <ControlLabel>Task title</ControlLabel>
                    <FormControl type="text"
                                 name="title"
                                 onChange={this.handleOnChange}/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Task description</ControlLabel>
                    <FormControl type="text"
                                 name="description"
                                 onChange={this.handleOnChange}/>
                </FormGroup>    
                <Button type="submit" bsStyle="primary">Save</Button>
            </form>            
        );
    }
}
