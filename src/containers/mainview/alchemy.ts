
import * as core from '../../core'
function getInitialDocument() {
    var doc = new core.Document();
    var entity = new core.TextEntity();
    entity.text = 'boy';

    var addBang = new core.TextTransfer(function (target: core.TextEntity) {
        var entity = new core.TextEntity();
        entity.text = target.text + '!';
        entity.addTransfer(sayHello)
        entity.position.x = target.position.x + target.size.width + 20;
        entity.position.y = target.position.y + target.size.height + 20;
        target.outers.push(entity)
        entity.iners.push(target);
    })

    addBang.title = 'addBang';

    var sayHello = new core.TextTransfer(function (target: core.TextEntity) {
        var entity = new core.TextEntity();
        entity.text = 'hello, ' + target.text + '!';
        entity.addTransfer(addBang)
        entity.position.x = target.position.x + target.size.width + 20;
        entity.position.y = target.position.y + target.size.height + 20;
        target.outers.push(entity)
        entity.iners.push(target)
    })

    sayHello.title = 'sayHello';

    entity.addTransfer(addBang)
    entity.addTransfer(sayHello)

    doc.entitys.push(entity);
    return doc;
}

const initialState = getInitialDocument();



const _INIT_ACTION = /@@redux*/;

export default function counter(state = initialState, action: any) {
  
    // switch (action.type) {
    //     case INCREMENT_COUNTER:
    //         // State mutations are bad, in dev mode, we detect them and throw an error.
    //         // Try it out by uncommenting the line below and running `npm run dev`!
    //         // state.mutation = true
    //         return { ...state, count: state.count + 1 }
    //     case DECREMENT_COUNTER:
    //         return { ...state, count: state.count - 1 }
    //     default:
    //         return state
    // }
    return state;
}
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export const UNDO_COUNTER = 'UNDO_COUNTER'
export const REDO_COUNTER = 'REDO_COUNTER'

export function increment() {
    return {
        type: INCREMENT_COUNTER
    }
}

export function decrement() {
    return {
        type: DECREMENT_COUNTER
    }
}

export function undo() {
    return {
        type: UNDO_COUNTER
    }
}

export function redo() {
    return {
        type: REDO_COUNTER
    }
}