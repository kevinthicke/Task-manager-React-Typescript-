import * as React from 'react';
import { connect } from 'react-redux';

class TaskList extends React.Component <any, any> {
    render() {
        console.log(this.props.tasks);
        return (
            <h1>TaskList</h1>
        )
    }
}

const mapStateToProps = (state: any) => ({
    tasks: state.tasks
});

export default connect(mapStateToProps, null)(TaskList);