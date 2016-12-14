



export class Entity {

    static entityCount = 0;

    public iners: Array<Entity> = [];
    public outers: Array<Entity> = [];

    public position: { x: number, y: number };
    public transfers: Array<{
        name: string,
        transfrom: Function
    }> = [];

    public id:number = Entity.entityCount ++;
}