import * as React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { capitalizeFirstLetter } from '../../utils/otherUtils';

interface FormItemProps {
    name: string,
    componentClass: string,
    handleFormOnChange: (event: any) => void
}

export default class FormItem extends React.Component <FormItemProps,any> {
    constructor(props: FormItemProps) {
        super(props);

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event: React.FormEvent<FormControl>) {
        const { 
            name: nameFormAttribute,
            value: valueFormAttribute 
        } = event.target as HTMLInputElement;
        
        this.props.handleFormOnChange({ nameFormAttribute, valueFormAttribute });
    }

    render () {
        const { name, componentClass } = this.props;

        return (
            <FormGroup>
                <ControlLabel>{ capitalizeFirstLetter(name) }</ControlLabel>
                <FormControl type="text"
                             componentClass={componentClass}
                             name={name}
                             autoComplete="off"
                             onChange={this.handleOnChange}/>
            </FormGroup>
        )
    }   
}