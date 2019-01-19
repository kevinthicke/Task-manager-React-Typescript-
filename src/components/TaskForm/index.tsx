import * as React from 'react';
import { Button, Well, Glyphicon } from 'react-bootstrap';
import { ITask, IFormAttributes } from '../../interfaces';
import FormItem from './FormItem';
import { taskObjectValuesIsEmpty, textIsTooLong } from '../../utils/TaskFormUtils';

interface TaskFormStates {
    title: string,
    description: string
}

interface TaskFormProps {
    addNewTask: (newTask: ITask) => void
}

export default class TaskForm extends React.Component <TaskFormProps,TaskFormStates> {
    constructor(props: TaskFormProps) {
        super(props);
        this.state = {
          title: '',
          description: ''
        }
    
        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleFormOnChange = this.handleFormOnChange.bind(this);
      }
    
      handleAddTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.addNewTask(this.state);
      }
      
      handleFormOnChange({ nameFormAttribute, valueFormAttribute }: IFormAttributes) {
        this.setState({ 
          ...this.state, 
          [nameFormAttribute]: valueFormAttribute 
        });
      }

      renderDescription() {
        const maxNumberOfCharacters = 165;
        const descriptionIsTooLong = textIsTooLong(maxNumberOfCharacters, this.state.description);

        if(descriptionIsTooLong) {
          return <FormItem handleFormOnChange={this.handleFormOnChange} 
                           name={'description'} 
                           componentClass="textarea"
                           validationState="error"/> 
        } else {
            return <FormItem handleFormOnChange={this.handleFormOnChange} 
                             name={'description'} 
                             componentClass="textarea"/>
        }
      }

      renderButton() {
        const titleOrDescriptionIsEmpty = taskObjectValuesIsEmpty(this.state);
        
        if(titleOrDescriptionIsEmpty) {
          return (
            <Button type="submit" bsStyle="primary" disabled>
              <Glyphicon glyph="glyphicon glyphicon-floppy-disk"/>
              <span style={{ marginLeft: '7px'}}>Save</span> 
            </Button>
          )
        } else return (
          <Button type="submit" bsStyle="primary">
            <Glyphicon glyph="glyphicon glyphicon-floppy-disk"/>
            <span style={{ marginLeft: '7px'}}>Save</span> 
          </Button>
        )
      }

      render() {
        return (
          <Well>
            <form onSubmit={event => this.handleAddTask(event)}>
              <FormItem handleFormOnChange={this.handleFormOnChange} name={'title'} componentClass="input"/>
              { this.renderDescription() }
              { this.renderButton() }
            </form>
          </Well>
        )
    }
} 