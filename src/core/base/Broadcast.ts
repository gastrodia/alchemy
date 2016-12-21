import {EventEmitter} from 'eventemitter3'

export class Broadcast extends EventEmitter{
    public static getInstance(){
        return new Broadcast();
    }
}
