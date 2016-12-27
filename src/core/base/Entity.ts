
import {EventEmitter} from 'eventemitter3'

import {Broadcast} from '../base/index'
import {Transfer} from './Transfer'

export abstract class Entity extends EventEmitter{

    static entityCount = 0;

    public iners: Array<Entity> = [];
    public outers: Array<Entity> = [];

    private _title:string;
    public get title():string{
        return this._title || this.type;
    }
    public set title(val){
        this._title = val;
    }

    public get boardcast(){
        return Broadcast.getInstance();
    }

    public _type:string;
    public get type():string{
        return this._type || (this as any).constructor.name;
    }
    public set type(val){
        this._type = val;
    }

    public position: { x: number, y: number } = {x:0,y:0};
    public size:{width:number,height:number} = {width:200,height:100};
    public transfers: Array<Transfer> = [];

    public id:number = Entity.entityCount ++;


    public update(){
       for(var i in this.transfers){
           this.transfers[i].update();
       }
    };


    public addTransfer(transfer:Transfer){
        this.transfers.push(transfer)
    }
}