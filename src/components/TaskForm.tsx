import * as React from 'react';
import { Button, FormGroup, FormControl, ControlLabel, FormControlProps} from 'react-bootstrap';

interface TaskFormStates {
    title: string
}


export default class TaskForm extends React.Component <any, TaskFormStates> {
    constructor(props:any) {
        super(props);
        this.state = {
            title: '',
        }

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event: React.FormEvent<FormControl>) {
        const { value } = event.target as HTMLInputElement;

        this.setState({
            title: value
        })
    }

    render() {
        return (
            <FormGroup>
                <ControlLabel>Task title</ControlLabel>
                <FormControl type="text" label="Task title" onChange={this.handleOnChange}/>
            </FormGroup>    
        );
    }
}
