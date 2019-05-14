import React from 'react';

class Addtodo extends React.Component {
    // constructor(props) {
    //     super(props);
    
    //   }
  render() {
    return (
      <form onSubmit={ this.props.s } >
        <input type='text' onChange={ this.props.c } />
        <button type='submit'>Add todo</button>
      </form>
    );
  }
}
export default Addtodo;
