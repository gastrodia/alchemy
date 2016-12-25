import {EventEmitter} from 'eventemitter3'

export class Broadcast extends EventEmitter{
    static _broadcast:Broadcast;
    public static getInstance(){
        if(!Broadcast._broadcast){
            Broadcast._broadcast = new Broadcast();
        }
        return  Broadcast._broadcast;
    }
}
