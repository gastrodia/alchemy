import * as React from "react";
import {TextEntity} from '../../core/entity/TextEntity'
import {Document} from '../../core/entity/Document'
export class LinkLayer extends React.Component<any, any> {
    public get doc():Document{
        return this.props.doc;
    } 
    render() {
        return <div></div>;
    }
}