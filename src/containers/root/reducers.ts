import { combineReducers } from 'redux'
//import counter from '../counter/counter'
import  alchemy from '../mainview/alchemy'
// import {
//   INCREMENT_COUNTER, DECREMENT_COUNTER,
//   UNDO_COUNTER, REDO_COUNTER
// } from '../counter/counter'
import {
  INCREMENT_COUNTER, DECREMENT_COUNTER,
  UNDO_COUNTER, REDO_COUNTER
} from '../mainview/alchemy'
import undoable, { includeAction } from 'redux-undo'

const rootReducer:any = combineReducers({
  // counter: undoable(counter, {
  //   filter: includeAction([INCREMENT_COUNTER, DECREMENT_COUNTER]),
  //   limit: 10,
  //   debug: true,
  //   undoType: UNDO_COUNTER,
  //   redoType: REDO_COUNTER
  // }),
  doc:undoable(alchemy as any,{
    filter: includeAction([INCREMENT_COUNTER, DECREMENT_COUNTER]),
    limit: 10,
    debug: true,
    undoType: UNDO_COUNTER,
    redoType: REDO_COUNTER
  }),
  //doc:alchemy
})

export default rootReducer
