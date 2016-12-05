import * as React from "react";


export class Hello extends React.Component<any, any> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}