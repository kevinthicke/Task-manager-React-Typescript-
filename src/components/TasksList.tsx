import * as React from 'react';
import { ITask } from './TasksForm';
import { ListGroup, ListGroupItem, Button, Well } from 'react-bootstrap';

const TaskListStyle: React.CSSProperties = {
    width: '400px'
}

interface TaskListProps {
    tasks: Array<ITask>,
    deleteTask: (id:number) => void
}

export default class TasksList extends React.Component <TaskListProps, any> {
    constructor(props: TaskListProps) {
        super(props);
        this.state = { taskId: 0 }
    }

    handleDeleteClick(id: number) {
        this.props.deleteTask(id);
    }

    render(): Array<JSX.Element> {
        const { tasks } = this.props;
        
        return tasks.map((task:ITask, index:number) => (
            <Well key={index} style={TaskListStyle}>
                <h3>{ `Task ${index +1}` }</h3>
                <ListGroup>
                    <ListGroupItem><strong>Title: </strong>{ task.title }</ListGroupItem>
                    <ListGroupItem><strong>Description: </strong>{ task.description }</ListGroupItem>
                </ListGroup>
                <Button bsStyle="danger" onClick={() => this.handleDeleteClick(task.id)}>Delete</Button>
            </Well>
            ))
    }
}