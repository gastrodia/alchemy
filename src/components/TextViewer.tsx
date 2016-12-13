import * as React from "react";
import {TextEntity} from '../core/entity/TextEntity'

export class TextViewer extends React.Component<any, any> {
    get entity():TextEntity{
        return this.props.entity;
    };
    render() {
        return <div>this.entity.text</div>;
    }
}