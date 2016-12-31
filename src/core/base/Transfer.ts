
import { Entity } from './Entity';
import * as _ from 'underscore';
import { Broadcast } from './Broadcast';



export type TransferFuncton = (...args: Array<Entity>) => Array<Entity>


type TransferRecord = {
    targets: Array<Entity>,
    results: Array<Entity>,
    transfer: Transfer
};

var records: Array<TransferRecord> = [];

var index = -1;

var sysBroadcast = Broadcast.getInstance();
sysBroadcast.on('undo', function () {
    console.log(index);
    if (index >= 0) {
        var item = records[index];
        item.transfer.undo(item.targets, item.results);
        index--;
        sysBroadcast.emit("redraw");
    }
});

sysBroadcast.on('redo', function () {
    console.log(index);
    if (index < records.length - 1) {
        var item = records[index + 1];
        item.transfer.redo(item.targets, item.results);
        index++;
        sysBroadcast.emit("redraw");
    }
});


export class Transfer {

    static transferCount = 0;

    private _exec: TransferFuncton = function (...args: Array<Entity>) {
        console.log('no nothing');
        return [];
    };

    private _execFunctionStr: string;

    public get exec() {
        return this._exec;
    }

    public set exec(func: TransferFuncton) {
        this._exec = func;
        this._execFunctionStr = this._exec.toString()
    }

    public setExec(func: TransferFuncton) {
        this.exec = func;
        return this;
    }

    public constructor(title?: string, exec?: TransferFuncton) {
        if (title) { this.title = title };
        if (exec) { this.exec = exec };
    }


    private _title: string;
    public get title(): string {
        return this._title || this.type;
    }
    public set title(val) {
        this._title = val;
    }

    public setTitle(val: string) {
        this.title = val;
        return this;
    }

    public id: number = Transfer.transferCount++;

    public _type: string = (this as any).constructor.name;
    public get type(): string {
        return this._type || (this as any).constructor.name;
    }
    public set type(val) {
        this._type = val;
    }

    public targets: Array<Entity>;
    public results: Array<Entity>;

    public execute() {
        this.results = this.exec(...this.targets);


        for (var i in this.results) {
            var entity = this.results[i];
            for (var j in this.targets) {
                var target = this.targets[j];
                console.log('push ' + entity.id + ' to ' + target.id + ' outers');
                target.outers.push(entity);
                console.log('push ' + target.id + ' to ' + entity.id + 'iners');
                entity.iners.push(target);
            }
        }

        var record = {
            targets: this.targets,
            results: this.results,
            transfer: this
        };

        index++;
        records[index] = record;
        console.log(index);
    };


    public undo(targets: Array<Entity>, results: Array<Entity>) {

        var remove = function (array: Array<any>, item: any) {
            var index = array.indexOf(item);
            if (index > -1) {
                array.splice(index, 1);
            }
        }

        for (var i in results) {
            var entity = results[i];
            for (var j in targets) {
                var target = targets[j];
                console.log('remove ' + entity.id + ' from ' + target.id + 'outers');
                if (target.outers.indexOf(entity) == -1) { debugger }
                remove(target.outers, entity);
                console.log('remove ' + target.id + ' from ' + entity.id + ' inters');
                if (entity.iners.indexOf(target) == -1) { debugger }
                remove(entity.iners, target);
            }
        }
    }

    public redo(targets: Array<Entity>, results: Array<Entity>) {
        for (var i in results) {
            var entity = results[i];
            for (var j in targets) {
                var target = targets[j];
                console.log('push ' + entity.id + ' to ' + target.id + ' outers');
                target.outers.push(entity);
                console.log('push ' + target.id + ' to ' + entity.id + 'iners');
                entity.iners.push(target);
            }
        }
    }



}