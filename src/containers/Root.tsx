import { Provider } from 'react-redux'
import * as React from 'react'
import { Component, PropTypes } from 'react'
import configureStore from '../store/configureStore'
const store: any = configureStore({})
import * as components from '../components'
import CounterPage from './CounterPage'
class MyProvider extends Provider {

}

export default class Root extends Component<any, any> {

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {


    return (<Provider store={store} key="provider">
      <CounterPage/>
    </Provider>);
  }
}
