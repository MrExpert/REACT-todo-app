import React, { Component } from 'react';
import List from './List';
import Addtodo from './Addtodo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  onChange(event) {
    this.setState({ text: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.text]
    });
  }

  handleDelete(iDelete) {
    // this.setState({ items: this.state.items.filter(todo => todo !== iDelete) });
    const newItems = this.state.items.filter((_item) => {
      return _item !== iDelete;
    });
    this.setState({ items: newItems });
    console.log('this is delete button');
  }

  render() {
    return (
      <div className='container'>
        <Addtodo s={ this.onSubmit } c={ this.onChange } />
        <List items={ this.state.items } m={ this.handleDelete } />
      </div>
    );
  }
}

export default App;
