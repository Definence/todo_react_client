import React  from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addTask  } from '../../actions/tasks';

class Form extends React.Component {
  //initial state форми
  constructor() {
    super();
    this.state = {
      task: {
        title: '',
        description: '',
        priority: '',
        due_date: '',
        user_id: '',
        active: false
      }
    };
  }

  handleChange(field, element) {
    //змінює стейт active на протилежне
    if (field == 'active')
      this.state.task.active = !this.state.task.active
    //змінює стейт решти полів форми
    else
      this.state.task[field] = element.target.value
  }

  handleSubmit(element) {
    element.preventDefault();
    this.props.onAddTask(this.state.task);
  }

  render() {
    return(
      <form className='form-group' onSubmit={ this.handleSubmit.bind(this) } >

        <label>Title:</label>
        <input className='form-control' onChange={ this.handleChange.bind( this, 'title') } type="text" placeholder='Enter a title' />

        <label>Description:</label>
        <input className='form-control' onChange={ this.handleChange.bind( this, 'description') } type="text" placeholder='Enter a description' />

        <label>Priority:</label>
        <input className='form-control' onChange={ this.handleChange.bind( this, 'priority') } type="number" placeholder='Enter a priority' />

        <label>Date:</label>
        <input className='form-control' onChange={ this.handleChange.bind( this, 'date') } type="date" placeholder='Enter a date' />

        <label>Completed:</label>
        <input className='form-group' onChange={ this.handleChange.bind( this, 'active') } type="checkbox" />

        <br/>

        <button type="submit" className="btn btn-primary form-group">Submit</button>

      </form>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    onAddTask: (task) => {
      dispatch(addTask(task));
    }
  })
)(Form);