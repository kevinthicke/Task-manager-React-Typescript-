import * as React from 'react';
import { ITask } from './TasksForm';
import { ListGroup, ListGroupItem, Button, Well } from 'react-bootstrap';

const TaskListStyle: React.CSSProperties = {
    width: '400px'
}

interface TaskListProps {
    tasks: Array<ITask>
}

export default class TasksList extends React.Component <TaskListProps, any> {
    render(): Array<JSX.Element> {
        const { tasks } = this.props;

        return tasks.map((task:ITask, index:number) => (
            <Well key={index} style={TaskListStyle}>
                <h3>{ `Task ${index +1}` }</h3>
                <ListGroup>
                    <ListGroupItem><strong>Title: </strong>{ task.title }</ListGroupItem>
                    <ListGroupItem><strong>Description: </strong>{ task.description }</ListGroupItem>
                </ListGroup>
                <Button bsStyle="danger">Delete</Button>
            </Well>
            ))
    }
}