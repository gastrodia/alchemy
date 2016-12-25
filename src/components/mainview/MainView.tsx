import * as React from "react";

import * as core from '../../core';

import { TextViewer } from '../textviewer/TextViewer';

import { Table } from '../table/Table';
import { LinkLayer } from '../linklayer/LinkLayer';
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
            if(entity instanceof core.TextEntity){
                viewers.push(<TextViewer entity={entity} key={entity.id} />)
            }     
            this.getTextViewers(viewers,entity.outers)
        }  
    }    

    render() {
        var viewers: Array<any> = [];
        this.getTextViewers(viewers,this.doc.entitys);
        return (
            <div className={styles.mainView} onContextMenu={this.onContextMenu}>
                {viewers}
                <LinkLayer doc={this.doc}> </LinkLayer>
            </div>
        );
    };
}