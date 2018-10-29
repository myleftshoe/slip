import React, { Component, PureComponent } from 'react';
import SlipMove from './SlipMove';
import './App.css';
import { move, shuffle, reverse } from './array';

const generateItems = length => [...Array(length).keys()].map(k => `Item ${k}`)

const actions = {
  reverse: ({items}) => ({items: reverse(items)}),
  shuffle: ({items}) => ({items: shuffle(items)}),
  move: (oldIndex, newIndex) => ({items}) => ({items: move(items, oldIndex, newIndex)}),
}

class App extends Component {

  state = {
    items: generateItems(10),
  }
  
  move = ({oldIndex, newIndex}) => this.setState(actions.move(oldIndex, newIndex));
  reverse = () => this.setState(actions.reverse);
  shuffle = () => this.setState(actions.shuffle);

  render() {
    const { items } = this.state;
    return (
      <div className="App" >
        <button onClick={this.reverse}>Reverse</button>
        <button onClick={this.shuffle}>Shuffle</button>
        <SlipMove onMoveEnd={this.move} flipMoveProps={{appearAnimation: 'elevator'}}>
          {items.map(item => <ListItem key={item}>{item}</ListItem>)}
        </SlipMove>
      </div>
    );
  }
}

// FlipMove requires class compoonents as children
class ListItem extends PureComponent {
  render() {
    const { children } = this.props;
    return <div className="draggable-item" >{children}</div>
  }
}

export default App;
