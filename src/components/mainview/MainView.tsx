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
    

    render() {
        var viewers: Array<any> = [];
        var entitys = this.doc.entitys;
        for (var i in entitys) {
            viewers.push(<TextViewer entity={entitys[i]} key={entitys[i].id} />)
        }
        return (
            <div className={styles.mainView} onContextMenu={this.onContextMenu}>
                {viewers}
                <LinkLayer doc={this.doc}> </LinkLayer>
            </div>
        );
    };
}