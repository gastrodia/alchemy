import * as React from "react";

import * as core from '../../core';

import { TextViewer } from '../textviewer/TextViewer';

import { Table } from '../table/Table';
import { LinkLayer } from '../linklayer/LinkLayer';
import {ContextMenu} from '../contextmenu/ContextMenu';
import * as styles from './mainview.css';
import { mainView } from './mainview.css';


export class MainView extends React.Component<any, any> {
    public get doc(): core.Document {
        return this.props.doc;
    };
    // 禁用鼠标右键
    private onContextMenu(evt: any) {
        evt.preventDefault();
    }

    constructor(){
        super();

        core.broadcast.on('redraw',()=>{
            this.forceUpdate()
        })
    }

    private getTextViewers(viewers:Array<any>,entitys:Array<core.Entity>){
        for (var i in entitys) {
            var entity = entitys[i];
            var Component:any  = core.componentMrg.getComponentByType(entity.type);
            //if(entity.type == "text"){
                if(Component){
                     viewers.push(<Component entity={entity} key={entity.id} />)
                }
               
            //}     
            if(entity.outers.length > 0){
                this.getTextViewers(viewers,entity.outers)
            }
        }  
    }    

    private handleClick(){
        return ()=>{
            (this.refs['contextmenu'] as any as ContextMenu).hide();
        }
    }

    private handleUndoClick(){
        core.broadcast.emit('undo');
    }

    private handleRedoClick(){
        core.broadcast.emit('redo');
    }

    

    render() {
        var viewers: Array<any> = [];
        this.getTextViewers(viewers,this.doc.entitys);
        return (
            <div className={styles.mainView} onContextMenu={this.onContextMenu} onClick={this.handleClick()}>
                {viewers}
                <LinkLayer doc={this.doc}> </LinkLayer>
                <ContextMenu ref="contextmenu"></ContextMenu>
                <button onClick={this.handleUndoClick}>undo</button>
                <button onClick={this.handleRedoClick}>redo</button>
            </div>
        );
    };
}