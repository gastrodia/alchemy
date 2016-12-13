import * as React from "react";

import { Document } from '../core/entity/Document';
import { Background } from './Background';
import { TextViewer } from './TextViewer';
import {Table} from './table/Table'
export class MainView extends React.Component<any, any> {
    public get doc(): Document{
     return this.props.doc;   
    };
    render() {
        var viewers: Array<any> = [];
        var entitys = this.doc.fetchEntity();
        for(var i in entitys){
            viewers.push(<TextViewer entity={entitys[i]}/>)
        }
        return (
            <div>
                viewers
                <Background />
                <Table></Table>
            </div>
        );
    }
}