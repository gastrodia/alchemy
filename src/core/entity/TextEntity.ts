import * as base from '../base'

export class TextEntity extends base.Entity {
    public text = '';

    constructor() {
        super();
        this.size.width = 120;
        this.size.height = 58.2;
    }
}