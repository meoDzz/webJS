import React from 'react';

class NewComp extends React.Component {
  render() {
    /*
    JSX return block (1 div block)
    */
    let name = 'Hello world'
    return (
      <div>
        {console.log(name)}
        My Application! {name}
      </div>
    );
  }
}

export default NewComp;
