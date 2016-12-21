import * as base from '../base'

export class TextEntity extends base.Entity{
    public text = new base.Property('');

    constructor(){
        super();
        this.text.onChange(()=>{
            this.boardcast.emit('redraw');
        })
    }
}