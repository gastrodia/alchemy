import * as React from "react";
import * as ReactDOM from "react-dom";
import * as core from '../../core';
import * as styles from './contextmenu.css'
export class ContextMenu extends React.Component<any, any> {
    render() {

        if (this._openedContextMenu) {

            var items: Array<any> = [];
            for (var i in this.entity.transfers) {
                var transfer = this.entity.transfers[i];
                items.push(
                    <div key={transfer.id} onClick={this.handleTransferClick(i)}
                        className={styles.item}
                        >{transfer.title}</div>
                )
            }

            return (
                <div className={styles.menu}>
                    <div className={styles.title}></div>
                    <div>
                        {items}
                    </div>
                </div>
            );
        } else {
            return <div></div>;
        }

    }

    private resetPosition() {
        var dom: HTMLElement = ReactDOM.findDOMNode(this) as any;
        dom.style.transform = `translate(${this.entity.position.x + this.entity.size.width + 20}px, ${this.entity.position.y}px)`;
        dom.style.height = this.entity.transfers.length * 30 + 30 + 'px';
    }

    public componentDidMount() {
        if (this.entity) {
            this.resetPosition();
        }
        var dom: HTMLElement = ReactDOM.findDOMNode(this) as any;
    }

    public componentDidUpdate() {
        if (this.entity) {
            this.resetPosition();
        }
    }

    private entity: core.Entity;

    private handleTransferClick(i: any) {
        return (evt:any) => {
            evt.preventDefault();
            var transfer = this.entity.transfers[i];
            transfer.target = this.entity;
            transfer.execute();
            this.closeContextMenu();
            core.broadcast.emit('redraw');

        }
    }

    public hide(){
        this._openedContextMenu = false;
        this.forceUpdate();
    }

    constructor() {
        super();
        core.broadcast.on('open-entity-contextmenu', (evt) => {
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