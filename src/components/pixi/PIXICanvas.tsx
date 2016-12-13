import * as React from "react";
import * as ReactDOM from 'react-dom';

export interface PIXICanvasProps { }




export class PIXICanvas extends React.Component<PIXICanvasProps, {}> {

    constructor(props: any, context: any) {
        super()
    }

    componentDidMount() {
        console.log(PIXI);

        //Create the renderer
        var renderer = PIXI.autoDetectRenderer(256, 256);

        //Add the canvas to the HTML document
        ReactDOM.findDOMNode(this).appendChild(renderer.view);

        //Create a container object called the `stage`
        var stage = new PIXI.Container();

       
        //Tell the `renderer` to `render` the `stage`
        renderer.render(stage);



    }

    render() {
        return <div id="pixi-canvas"></div>;
    }
}