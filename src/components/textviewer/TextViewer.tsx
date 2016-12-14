import * as React from "react";
import {TextEntity} from '../../core/entity/TextEntity'
import * as styles from './textviewer.css'

 var ContentEditable = require("react-contenteditable");

export class TextViewer extends React.Component<any, any> {
    get entity():TextEntity{
        return this.props.entity;
    };



    handleChange(evt:any){
      this.setState({html: evt.target.value});
    }

    render() {
        return <div className={styles.textviewer}>
            <div className={styles.title}>
                TextViewer
            </div>
             <ContentEditable
                html="<b>Hello <i>World</i></b>" // innerHTML of the editable div
                disabled={false}       // use true to disable edition
                onChange={this.handleChange} // handle innerHTML change
              />
        </div>;
    }
}