import * as React from 'react';
import { Well, Button, Glyphicon } from 'react-bootstrap';
import { ITask } from '../../interfaces';

const TaskListItemStyle: React.CSSProperties = {
    height: '256px',
    width: '285px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
}

const DeleteButtonStyle: React.CSSProperties = {
    textAlign: 'right'
}

const DescriptionStyle: React.CSSProperties = {
    fontSize: '12pt'
} 

interface TaskListItemProps {
    task: ITask
}

class TaskListItem extends React.Component <TaskListItemProps, any> {
    render() {
        const { title, description } = this.props.task;
        
        return (
            <Well style={TaskListItemStyle}>
                <h3>{ title }</h3>
                <p style={DescriptionStyle}>{ description }</p>
                <div style={DeleteButtonStyle}>
                    <Button bsStyle="danger">
                        <Glyphicon glyph="glyphicon glyphicon-trash"/>
                        <span style={{ marginLeft: '7px'}}> Delete </span>
                    </Button>
                </div>
            </Well>
        )
    }
}

export default TaskListItem;