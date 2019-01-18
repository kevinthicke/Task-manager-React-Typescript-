import * as React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { capitalizeFirstLetter } from '../../utils/otherUtils';


interface FormItemProps {
    name: string,
    componentClass?: string,
    handleFormOnChange: (event: any) => void
}

export default class FormItem extends React.Component <FormItemProps,any> {
    constructor(props: any) {
        super(props);

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event: any) {
        const formAttribute = { 
            name: event.target.name, 
            input: event.target.value 
        }
        
        this.props.handleFormOnChange(formAttribute);
    }

    render () {
        return (
            <FormGroup>
                <ControlLabel>{ capitalizeFirstLetter(this.props.name) }</ControlLabel>
                <FormControl type="text"
                             componentClass={this.props.componentClass}
                             name={this.props.name}
                             onChange={this.handleOnChange}/>
            </FormGroup>
        )
    }   
}