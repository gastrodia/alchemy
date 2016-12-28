/*eslint-disable*/
import * as React from 'react'
import { Component, PropTypes } from 'react'
/*eslint-enable*/

export default class Counter extends Component<any,any> {

  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    undo: PropTypes.func.isRequired,
    redo: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
  };

  render () {
    const { increment, decrement, count, undo, redo } = this.props
    return (
      <p>
        Clicked: {count} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={undo}>Undo</button>
        {' '}
        <button onClick={redo}>Redo</button>
      </p>
    )
  }
}
