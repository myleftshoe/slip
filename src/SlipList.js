import React, { Component } from 'react';
import {Slip} from './slip';
import './App.css';

const generateItems = length => [...Array(length).keys()].map(k => `Item ${k}`)

class SlipList extends Component {

  setListRef = el => {
    this.list = el;
    console.log(this.list);
    new Slip(this.list);
    this.list.addEventListener('slip:reorder', e => {
      console.log(e);
      const { originalIndex: oldIndex, spliceIndex: newIndex } = e.detail;
      this.props.onDragEnd({oldIndex, newIndex});
    });    
  }

  componentWillUnmount() {
    this.list.removeEventListener('slip:reorder');
  }

  render() {
    const { items } = this.props;
    return (
      <div className="App" onContextMenu={stopEvent}>
        <div className="draggable-container" ref={this.setListRef}>{
          items.map(item => <ListItem key={item}>{item}</ListItem>)
        }
        </div>
      </div>
    );
  }
}

const ListItem = ({children}) => <div className="draggable-item" >{children}</div>

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
