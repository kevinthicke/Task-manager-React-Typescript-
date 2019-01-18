import * as React from 'react';
import { Well } from 'react-bootstrap';
import { ITask } from '../../interfaces';

const TaskListItemStyle: React.CSSProperties = {
    height: '256px'
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
            </Well>
        )
    }
}

export default TaskListItem;