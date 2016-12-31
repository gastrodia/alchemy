
import * as core from '../../core'
function getInitialDocument() {
    let doc = new core.Document();
    let entity = new core.Entity();
    entity.setType('text').setInfo('boy');

    var addBang = new core.Transfer();
    addBang.setTitle('addBang').setExec(function (target) {
        var result = target.breed().setInfo(target.info + '!').setPosition({
            x:target.position.x + target.size.width + 20,
            y:target.position.y + target.size.height + 20
        }).addTransfer(sayHello);
        target.on('info-change',function(){
            result.info = target.info + '!';
            result.boardcast.emit('redraw');
        });
        return [result]
    });

    addBang.title = 'addBang';
    var sayHello = new core.Transfer('sayHello',function (...targets: Array<core.Entity>) {
        var target = targets[0];
        var entity = target.breed();
        entity.info = 'hello, ' + target.info + '!';
        entity.addTransfer(addBang)
        entity.position.x = target.position.x + target.size.width + 20;
        entity.position.y = target.position.y + target.size.height + 20;

        target.on('info-change',function(){
            entity.info = 'hello, ' + target.info + '!';
            entity.boardcast.emit('redraw');
        });

        return [entity];
    })

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