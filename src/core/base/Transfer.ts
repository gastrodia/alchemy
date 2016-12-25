
export class Transfer{

    static transferCount = 0;

    protected exec: Function = function (scope: Transfer) {
        console.log('no nothing')
    };

    private _title: string;
    public get title(): string {
        return this._title || this.type;
    }
    public set title(val) {
        this._title = val;
    }

    public id: number = Transfer.transferCount++;

    public _type: string;
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