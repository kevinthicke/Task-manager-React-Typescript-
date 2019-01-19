import * as React from 'react';
import { Well, Button, Glyphicon } from 'react-bootstrap';
import { ITask } from '../../interfaces';
import TaskButton from '../TaskButton';

const TaskListItemStyle: React.CSSProperties = {
    height: '256px',
    width: '285px',
    display: 'grid',
    gridTemplateRows: '1fr 4fr 1fr'
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
                    <TaskButton bsStyle="danger" glyph="glyphicon glyphicon-trash" buttonText="delete"/>
                </div>
            </Well>
        )
    }
}

export default TaskListItem;