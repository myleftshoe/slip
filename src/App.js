import React, { Component, PureComponent } from 'react';
import Slip from './slip';
import FlipMove from 'react-flip-move';
import './App.css';

const generateItems = length => [...Array(length).keys()].map(k => `Item ${k}`)

class App extends Component {

  state = {
    items: generateItems(80),
    reordering: false
  }
  
  setListRef = el => {
    this.list = el;
    console.log(this.list);
    new Slip(this.list);
    this.list.addEventListener('slip:reorder', e => {
      console.log(e);
      const { originalIndex: oldIndex, spliceIndex: newIndex } = e.detail;
      const items = reorder(this.state.items, oldIndex, newIndex);
      this.setState({items, reordering:false});
    });    
    this.list.addEventListener('slip:beforereorder', e => {
      this.setState({reordering: true});
    });    
  }

  reverse = () => {
    this.setState({items: [...this.state.items].reverse()});
    // this.setState({items: reorder(this.state.items,2,7)});
  }
  render() {
    const { items } = this.state;
    return (
      <div className="App" onContextMenu={stopEvent}>
        <button onClick={this.reverse}>Reverse</button>
        <div className="draggable-container" ref={this.setListRef}>
          <FlipMove typeName={null} disableAllAnimations={this.state.reordering}>
            {items.map(item => <ListItem key={item}>{item}</ListItem>)}
          </FlipMove>
        </div>
      </div>
    );
  }
}

// const ListItem = ({children}) => <div className="draggable-item" >{children}</div>

class ListItem extends PureComponent {
  render() {
    const { children } = this.props;
    return <div className="draggable-item" >{children}</div>
  }
}


const stopEvent = e => {
  console.log("stopping event", e);
  e.preventDefault();
  e.stopPropagation();
}

const reorder = (arr, oldIndex, newIndex) => {
  if (oldIndex === null && newIndex === null) return arr;

  const result = [...arr];
  let item = null;

  if (oldIndex !== null) {
      item = result.splice(oldIndex, 1)[0];
  }

  if (newIndex !== null) {
      result.splice(newIndex, 0, item);
  }

  return result;
};

export default App;
