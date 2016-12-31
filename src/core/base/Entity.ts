
import {EventEmitter} from 'eventemitter3'

import {Broadcast} from '../base/index'
import {Transfer} from './Transfer'

import * as CircularJSON from 'circular-json'

export class Entity extends EventEmitter{

    static entityCount = 0;

    public iners: Array<Entity> = [];
    public outers: Array<Entity> = [];

    private _title:string;
    public get title():string{
        return this._title || this.type;
    }
    public set title(val:string){
        this._title = val;
    }
    public setTitle(val:string){
        this._type = val;
        return this;
    }

    public get boardcast(){
        return Broadcast.getInstance();
    }

    public _type:string = (this as any).constructor.name;
    public get type():string{
        return this._type ;
    }
    public set type(val){
        this._type = val;
    }
    public setType(type:string){
        this._type = type;
        return this;
    }


    public position: { x: number, y: number } = {x:0,y:0};
    public size:{width:number,height:number} = {width:200,height:100};
    public transfers: Array<Transfer> = [];

    public id:number = Entity.entityCount ++;


    public setPosition(position:{x:number,y:number}){
        this.position = position;
        return this;
    }

    public setSize(size:{width:number,height:number}){
        this.size = size;
        return this;
    }


    public addTransfer(transfer:Transfer){
        this.transfers.push(transfer);
        return this;
    }

    private _info:any;

    get info(){
        return this._info;
    }

    set info(val){
        this._info = val;
        this.emit('info-change');
    }

    public setInfo(info:any){
        this.info = info;
        return this;
    }


    public toJson(){
        return CircularJSON.stringify(this);
    }

    public loadJson(json:string){
        var obj = CircularJSON.parse(json);
        for(var key in obj){ 
           (this as any)[key] = obj[key]
        }
        return this;
    }

    public breed(){
        var child = new Entity();
        child.type = this.type;
        return child;
    }
}