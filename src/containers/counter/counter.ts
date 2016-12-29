
export default function counter (state = { count: 0 }, action:any) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      // State mutations are bad, in dev mode, we detect them and throw an error.
      // Try it out by uncommenting the line below and running `npm run dev`!
      // state.mutation = true
      return { ...state, count: state.count + 1 }
    case DECREMENT_COUNTER:
      return { ...state, count: state.count - 1 }
    default:
      return state
  } 
}
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export const UNDO_COUNTER = 'UNDO_COUNTER'
export const REDO_COUNTER = 'REDO_COUNTER'

export function increment () {
  return {
    type: INCREMENT_COUNTER
  }
}

export function decrement () {
  return {
    type: DECREMENT_COUNTER
  }
}

export function undo () {
  return {
    type: UNDO_COUNTER
  }
}

export function redo () {
  return {
    type: REDO_COUNTER
  }
}