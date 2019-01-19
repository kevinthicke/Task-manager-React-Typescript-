import * as React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

interface TaskButtonProps {
    bsStyle: any, 
    glyph: any, 
    buttonText: any
}

const TaskButton: React.SFC<TaskButtonProps> = ({ bsStyle, glyph, buttonText }) => (
    <Button bsStyle={bsStyle}>
        <Glyphicon glyph={glyph}/>
        <span style={{ marginLeft: '7px'}}>{ buttonText }</span>
    </Button>
)

export default TaskButton;