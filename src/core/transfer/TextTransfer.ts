import {TextEntity} from '../entity/TextEntity'
import {Entity} from '../entity/Entity'


export class TextProperty{
    private _text:string;

    public get(){
        return this._text;
    }

    public set(val:string){
        this._text = val;
    }
}

export class TextTransferRecord{
    left:TextProperty;
    right:TextProperty;
}

export class TextTransfer extends Entity{
   constructor(exec:Function){
       super();
       this.exec = exec;
   }

   private transferRecords:Array<TextTransferRecord> = [];



   public getInputTexts(){
       for(var i in this.iners){
           var iner = this.iners[i];
           if(iner instanceof TextEntity){
               iner.text;
           }
       }
   }
}



