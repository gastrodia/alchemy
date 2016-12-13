import {Entity} from './Entity';
export class Document{
    entitys:Array<Entity> = [];

    fetchEntity(){
        return this.entitys;
    }
}