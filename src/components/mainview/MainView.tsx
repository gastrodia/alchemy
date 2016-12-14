import * as React from "react";

import { Document } from '../../core/entity/Document';

import { TextViewer } from '../textviewer/TextViewer';

import { Table } from '../table/Table';
import { LinkLayer } from '../linklayer/LinkLayer';
import * as styles from './mainview.css';
import { mainView } from './mainview.css';

export class MainView extends React.Component<any, any> {
    public get doc(): Document {
        return this.props.doc;
    };
    render() {
        var viewers: Array<any> = [];
        var entitys = this.doc.fetchEntity();
        for (var i in entitys) {
            viewers.push(<TextViewer entity={entitys[i]} key={entitys[i].id} />)
        }
        return (
            <div className={styles.mainView}>
                {viewers}
                <LinkLayer doc={this.doc}> </LinkLayer>
            </div>
        );
    };
}