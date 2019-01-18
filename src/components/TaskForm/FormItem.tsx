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

    public static defaultProps = {
        componentClass: "p"
    }
    
    handleOnChange(event: any) {
        const { name, value } = event.target;
        this.props.handleFormOnChange({ name, value });
    }

    render () {
        console.log(this.props);
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