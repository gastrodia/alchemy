import { Provider } from 'react-redux'
import * as React from 'react'
import { Component, PropTypes } from 'react'
import configureStore from '../../store/configureStore'
import MainView from '../mainview/MainView'

class MyProvider extends Provider {

}

export class Root extends Component<any, any> {

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
 const { history } = this.props
    return (<Provider store={configureStore(history)} key="provider">
      <MainView />
    </Provider>);
  }
}
