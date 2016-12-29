import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as components from '../../components'
//import * as CounterActions from './counter'

function mapStateToProps (state:any) {
  return {
    doc: state.doc.present
  }
}

function mapDispatchToProps (dispatch:any) {
  return bindActionCreators({} as any, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(components.MainView)
