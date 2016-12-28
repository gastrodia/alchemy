import * as React from 'react'
import { Component, PropTypes } from 'react'

export default class Main extends Component<any,any> {

  static propTypes = {
    children: PropTypes.any.isRequired
  };

  render () {
    return (
      <div>
          {/* this will render the child routes */}
          {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}
