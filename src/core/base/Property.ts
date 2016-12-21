
export class Property<T>{
    protected val:T;
    protected oldVal:T;

    constructor(val:T){
        this.val = val;
    }

    public get():T{
        return this.val;
    }

    public set(val:T){
        if(this.val != val){
            this.oldVal = this.val;
            this.val = val;
            if(this.emitChangeStoped){
                this.emitChange();
            }
        }   
    }

    public getOldValue(){
        return this.oldVal;
    }

    private emitChange(){
        for(var i=0,len = this.changeCallbacks.length;i<len;i++){
            var callback = this.changeCallbacks[i];
            callback();
        }
        for(var i=0,len = this.changeOnceCallbacks.length;i<len;i++){
            var callback = this.changeOnceCallbacks[i];
            callback();
        }
        this.changeCallbacks = [];
    }

    private emitChangeStoped = false;

    private stopEmitChange(){
        this.emitChangeStoped = true;
    }

    private startEmitChange(){
        this.emitChangeStoped = false;
    }

    private changeCallbacks:Array<Function> = [];
    public onChange(callback:Function){
        this.changeCallbacks.push(callback);
    }

    private changeOnceCallbacks:Array<Function> = [];
    public onChangeOnce(callback:Function){
        this.changeOnceCallbacks.push(callback);
    }
}