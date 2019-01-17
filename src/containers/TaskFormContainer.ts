import { connect } from 'react-redux';
import { actionAddNewTask } from "../actions";
import TaskForm from '../components/TaskForm';

const mapStateToProps = (state) => ({
    tasks: state.tasks
});
    
const mapDispatchToProps = (dispatch) => ({
    addNewTask: (newTask: any) => dispatch(actionAddNewTask(newTask))
})
    
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)
