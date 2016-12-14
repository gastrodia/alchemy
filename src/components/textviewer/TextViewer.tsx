import * as React from "react";
import {TextEntity} from '../../core/entity/TextEntity'
import * as styles from './textviewer.css'

export class TextViewer extends React.Component<any, any> {
    get entity():TextEntity{
        return this.props.entity;
    };
    render() {
        return <div className={styles.textviewer}>
            <div className={styles.title}>
                TextViewer
            </div>
            <div className={styles.body} contenteditable="true">
                {this.entity.text}
            </div>
        </div>;
    }
}