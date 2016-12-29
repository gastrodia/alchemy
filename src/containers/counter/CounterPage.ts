import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../../components/counter/Counter'
import * as CounterActions from './counter'

function mapStateToProps (state:any) {
  return {
    count: state.counter.present.count
  }
}

function mapDispatchToProps (dispatch:any) {
  return bindActionCreators(CounterActions as any, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
