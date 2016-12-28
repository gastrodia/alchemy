
export class Transfer{

    static transferCount = 0;

    private _exec : Function = function (scope: Transfer) {
        console.log('no nothing')
    };

    private _execFunctionStr:string ;

    public get exec(){
        return this._exec;
    }

    public set exec(func:Function){
        this._exec = func;
        this._execFunctionStr = this._exec.toString()
    }

    private _title: string;
    public get title(): string {
        return this._title || this.type;
    }
    public set title(val) {
        this._title = val;
    }

    public id: number = Transfer.transferCount++;

    public _type: string = (this as any).constructor.name;
    public get type(): string {
        return this._type || (this as any).constructor.name;
    }
    public set type(val) {
        this._type = val;
    }

    public target: any;

    public execute() {
        this.exec(this.target, this);
    };
    public update() {
        this.exec(this.target, this);
    };


}