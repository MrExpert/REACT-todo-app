import React from 'react';

class List extends React.Component {
  render() {
    return (
      <ul>
        { this.props.items.map((text, index) => (
          <li key={ index }>
            <input value={ text } />&nbsp;&nbsp;&nbsp;
            <a onClick={ this.props.m }>delete</a>
          </li>
            ))
        }
      </ul>
    );
  }
}
export default List;
