import * as React from 'react';
import { connect } from 'react-redux';
import { ITask } from '../../interfaces/index';
import TaskListItem from './TaskListItem';

interface TaskListProps {
    tasks: Array<ITask>
}

class TaskList extends React.Component <TaskListProps, any> {

    render() {
        return this.props.tasks.map(
            (task: ITask, index: number) => <TaskListItem key={index} task={task}/>)
    }
}

const mapStateToProps = (state: any) => ({
    tasks: state.tasks
});

export default connect(mapStateToProps, null)(TaskList);