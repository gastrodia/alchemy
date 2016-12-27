import * as React from "react";
import * as core from '../../core'

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
    public get entity(): core.TextEntity {
        return this.props.entity;
    };



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
            this.entity.text = evt.target.value
        }
    }

    private getTextContent():string {
        return this.entity.text
    }


    private handleDrag() {
        return (evt: any) => {
            this.entity.position = this.getElementTranslate();
            this.entity.boardcast.emit('entity-position-change');
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
            this.entity.boardcast.emit('entity-position-change');
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
            this.entity.boardcast.emit('open-entity-contextmenu',{entity:this.entity});
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
                    
                </div>


            </Draggable>
        );
    }
}