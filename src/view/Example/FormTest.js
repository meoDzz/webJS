import React from 'react';
import Application from './Application';
class FormTest extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    arrJobs: [
        {id:'123job1', title:'dev', salary:'500'},
        {id:'521job2', title:'testers', salary:'300'},
        {id:'567job3', title:'managers', salary:'5000'},
      ]
  }

  handleOnChangeName = (event) =>
  {
      this.setState(
        {
          firstName: event.target.value,
        }
      )
  }
  handleOnChangeLastName = (event) =>
  {
      this.setState(
        {
          lastName: event.target.value,
        }
      )
  }
  handOnClick = (event) =>
  {
    event.preventDefault()
    console.log('Check data: ', this.state)
  }
  render() {
    return (
      <div>
        <form>
          <label htmlFor="fname">First name:</label><br />
          <input 
              type="text" 
              value={this.state.firstName} 
              onChange={(event) => this.handleOnChangeName(event)}
          /><br />
          <label htmlFor="lname">Last name:</label><br />
          <input 
              type="text" 
              value={this.state.lastName} 
              onChange={(event) => this.handleOnChangeLastName(event)} /><br />
          <input
           type="button" value="submit"
           onClick={(event) => this.handOnClick(event)}
           />
        </form>
        <Application 
        name={"lu"}
        // name = {this.state.lastName}
        age={"25"}
        address={"25 Ashahi dai"}
        def ={this.state.arrJobs}
        />
      </div>
    );
  }
}

export default FormTest;