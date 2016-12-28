import { Entity } from './Entity';
import * as Immutable from 'immutable';



export class Document extends Entity {
    public entitys: Array<Entity> = [];

    public history = Immutable.List.of(Immutable.List());
    public historyIndex = 0;
    public performOperation(fn: any) {
        this.history = this.history.slice(0, this.historyIndex + 1) as any;
        let newVersion = fn(this.history.get(this.historyIndex));
        this.history = this.history.push(newVersion);
        this.historyIndex++;
        this.update();
    }
}