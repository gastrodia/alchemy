
import {EventEmitter} from 'eventemitter3'
export interface Runable{
    exec:Function;
}

export abstract class Entity extends EventEmitter implements Runable{

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

    public _type:string;
    public get type():string{
        return this._type || (this as any).constructor.name;
    }
    public set type(val){
        this._type = val;
    }

    public position: { x: number, y: number } = {x:0,y:0};
    public transfers: Array<Entity> = [];

    public id:number = Entity.entityCount ++;

    public exec:Function;

    private isRunable(){
        return this.exec;
    }

    public execute(){
        if(this.isRunable()){
            this.exec(this);
        }
    }

    public update(){
       this.execute();
       for(var i in this.outers){
           this.outers[i].update();
       }
    };


    public addTransfer(transfer:Entity){
        transfer.iners.push(this);
        this.outers.push(transfer);
        this.transfers.push(transfer)
    }
}