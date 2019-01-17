import * as React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class FormItem extends React.Component <any,any> {
    constructor(props: any) {
        super(props);
        
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    
    handleOnChange(event: any) {
        const { name, value } = event.target;
        this.props.handleFormOnChange({ name, value });
    }

    render () {
        return (
            <FormGroup>
                <ControlLabel>Title</ControlLabel>
                <FormControl type="text"
                             name={this.props.name}
                             onChange={this.handleOnChange}/>
            </FormGroup>
        )
    }   
}