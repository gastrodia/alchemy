import * as React from "react";
import * as core from '../../core';
import * as styles from './contextmenu.css'
export class ContextMenu extends React.Component<any, any> {
    render() {

        if (this._openedContextMenu) {

          var items: Array<any> = [];
            for (var i in this.entity.transfers) {
                var transfer = this.entity.transfers[i];
                items.push(
                    <div key={transfer.id} onClick={this.handleTransferClick(i)}>{transfer.title}</div>
                )
            }
            console.log(items);
            return (
                <div className={styles.menu}>
                    <div>
                        {items}
                    </div>
                </div>
            );
        }else{
            return <div></div>;
        }
        
    }

    private entity:core.Entity;

    private handleTransferClick(i:any){
        return ()=>{
            var transfer = this.entity.transfers[i];
            transfer.target = this.entity;
            transfer.execute();
            this.closeContextMenu();
            core.broadcast.emit('redraw');
        }
    }

    constructor(){
        super();
        core.broadcast.on('open-entity-contextmenu',(evt)=>{
            this.entity = evt.entity;
            this._openedContextMenu = true;
            this.forceUpdate();
        })
    }


    private _openedContextMenu: boolean = false;

    private openContextMenu() {
        this._openedContextMenu = true;
        this.forceUpdate();
    }

    private closeContextMenu() {
        this._openedContextMenu = false;
        this.forceUpdate();
    }

}