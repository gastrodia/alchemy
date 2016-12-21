import * as React from "react";
import { TextEntity } from '../../core/entity/TextEntity'
import * as styles from './textviewer.css'
import * as ReactDOM from 'react-dom';

var ContentEditable = require("react-contenteditable");
var Draggable = require('react-draggable');



class Menu extends React.Component<any, any> {
    render() {
        return <ul></ul>;
    }
}

class Item extends React.Component<any, any>{
    render() {
        return <li></li>;
    }
}




export class TextViewer extends React.Component<any, any> {
    public get entity(): TextEntity {
        return this.props.entity;
    };

    private width = 120;
    private height = 58.2;

    private bodyEditable = false;

    private getElementTranslate() {
        var dom = ReactDOM.findDOMNode(this);
        var transform: string = (dom as any).style.transform;
        //var nums = transform.replace(/[^\d]/g,',').split(',')
        var nums = transform.match(/\d+/g);
        return {
            x: Number(nums[0]),
            y: Number(nums[1])
        }
    }



    private handleChange() {
        return (evt: any) => {
            this.entity.text.set(evt.target.value)
        }
    }

    private getTextContent():string {
        return this.entity.text.get()
    }


    private handleDrag() {
        return (evt: any) => {
            this.entity.position = this.getElementTranslate();
        }
    }

    private handleDragStart() {
        return (evt: any) => {
            //  this.entity.position = this.getElementTranslate();
            //     console.log(this.entity.position)
        }
    }
    private handleDragStop() {
        return (evt: any) => {
            this.entity.position = this.getElementTranslate();
            console.log(this.entity.position)
        }
    }

    private handleBodyMouseEnter() {
        return () => {
            this.bodyEditable = true;
            this.forceUpdate();
        }
    }

    private handleBodyBlur() {
        return () => {
            this.bodyEditable = false;
            this.forceUpdate();
        }
    }

    private handleContextMenu() {
        return (evt: any) => {
            this.openContextMenu();
        }
    }

    private handleTransferClick(i:any){
        return ()=>{
            var transfer = this.entity.transfers[i];
            transfer.execute();
            this.closeContextMenu();
        }
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

    private getContextMenu() {
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
        }
    }

    render() {
        return (
            <Draggable
                // axis="x"
                // handle=".handle"
                defaultPosition={this.entity.position}
                //  position={{ x: 89 - this.width/2, y: 35 - this.height/2}}
                //  grid={[20, 20]}
                // zIndex={100}
                onStart={this.handleDragStart()}
                onDrag={this.handleDrag()}
                onStop={this.handleDragStop()}
                >
                <div className={styles.textviewer}
                    onContextMenu={this.handleContextMenu()}
                    >
                    <div className={styles.title}>
                        TextViewer
                    </div>
                    <ContentEditable
                        html={this.getTextContent()} // innerHTML of the editable div
                        disabled={!this.bodyEditable}       // use true to disable edition
                        //disabled={true}       // use true to disable edition
                        onChange={this.handleChange()} // handle innerHTML change
                        className={styles.body}
                        onMouseEnter={this.handleBodyMouseEnter()}
                        />
                    {this.getContextMenu()}
                </div>


            </Draggable>
        );
    }
}