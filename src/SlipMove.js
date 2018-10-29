import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Slip from './slip';
import FlipMove from 'react-flip-move';

export default class extends Component {

  static propTypes = {
    children: PropTypes.array,
    onMove: PropTypes.func,
    onMoveStart: PropTypes.func,
    disableMove: PropTypes.bool,
  };

  state = {
    reordering: false
  }
  
  handleBeforeReorder = e => {
    if (this.props.disableMove) {
        e.preventDefault();
        return;
    }
    this.setState({reordering: true});
    this.props.onMoveStart && this.props.onMoveStart();
  }

  handleReorder = e => {
    const { originalIndex: oldIndex, spliceIndex: newIndex } = e.detail;
    this.props.onMoveEnd && this.props.onMoveEnd({oldIndex, newIndex});
    this.setState({reordering:false});
  }

  container = null;
  init = node => {
    this.container = node;
    new Slip(this.container);
    this.container.addEventListener('slip:beforereorder', this.handleBeforeReorder);
    this.container.addEventListener('slip:reorder', this.handleReorder);    
  }

  componentWillUnmount() {
    this.container.removeEventListener('slip:beforereorder', this.handleBeforeReorder);
    this.container.removeEventListener('slip:reorder', this.onReorder);    
  }

  render() {
    const { children } = this.props;
    console.log('render', children);
    return (
        <div className="draggable-container" ref={this.init}>
            <FlipMove typeName={null} disableAllAnimations={this.state.reordering} appearAnimation="accordionVertical">
                {children}
            </FlipMove>
        </div>
    );
  }
}

