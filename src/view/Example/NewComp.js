import { getAllByPlaceholderText } from '@testing-library/react';
import React from 'react';

class NewComp extends React.Component {

  state = 
  {
    name: "hello",
    channel: "lui"
  }
  testNe = {
    nullAl: "vvv"
  }

  // Arrow function
  handleClickButton = () =>
  {
    alert('click me')
  }

  handleOnChangeName = (event) =>
  {
    // Never use this syntax---- bad code
    // this.state.name = event.target.value;
    this.setState(
      {
        name: event.target.value,
        channel: "abc"
      }
    )
  }
  render() {
    /*
    JSX return block (1 div block)
    */

    return (
      <div>

        <div className='first'>
            <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)}>
            </input>
            My name is {this.state.name}
            My name is {this.state.channel}
        </div>
        {console.log(this.state.name)}
        My Application! {this.testNe.nullAl}
        <div className='hello'>
            <button onClick={() => this.handleClickButton() }>Click me</button>
        </div>
      </div>

    );
  }
}

export default NewComp;
