import rootReducer from '../reducers'
import { createStore, applyMiddleware, compose } from 'redux'

function createStoreWithMiddleware(reducer:any,initialState:any){
    return createStore(reducer,initialState)
}

export default function configureStore (initialState:any) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  (window as any).store = store;
  return store
}
