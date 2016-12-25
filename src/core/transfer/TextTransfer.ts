import {TextEntity} from '../entity/TextEntity'
import * as base from '../base'




export class TextTransfer extends base.Transfer{    

    public target:TextEntity;

   constructor(exec:Function){
       super();
       this.exec = exec;
   }
}



