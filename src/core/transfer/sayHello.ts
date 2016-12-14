import {TextEntity} from '../entity/TextEntity'
export function transfrom(entity1:TextEntity):TextEntity{
    var entity2 = new TextEntity();
    entity2.iners.push(entity1);
    entity1.outers.push(entity2);
    entity2.text = 'hello, ' + entity1.text;
    return entity2;
}

export var name:string = 'sayHello';