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

        var rectangle = new PIXI.Graphics();
        rectangle.lineStyle(4, 0xFF3300, 1);
        rectangle.beginFill(0x66CCFF);
        rectangle.drawRect(0, 0, 64, 64);
        rectangle.endFill();
        rectangle.x = 170;
        rectangle.y = 170;
        stage.addChild(rectangle);

        var circle = new PIXI.Graphics();
        circle.beginFill(0x9966FF);
        circle.drawCircle(0, 0, 32);
        circle.endFill();
        circle.x = 64;
        circle.y = 130;
        stage.addChild(circle);

        var ellipse = new PIXI.Graphics();
        ellipse.beginFill(0xFFFF00);
        ellipse.drawEllipse(0, 0, 50, 20);
        ellipse.endFill();
        ellipse.x = 180;
        ellipse.y = 130;
        stage.addChild(ellipse);

        // var roundBox = new PIXI.Graphics();
        // roundBox.lineStyle(4, 0x99CCFF, 1);
        // roundBox.beginFill(0xFF9933);
        // roundBox.drawRoundedRect(0, 0, 84, 36, 10)
        // roundBox.endFill();
        // roundBox.x = 48;
        // roundBox.y = 190;
        // stage.addChild(roundBox);

        //Tell the `renderer` to `render` the `stage`
        renderer.render(stage);



    }

    render() {
        return <div id="pixi-canvas"></div>;
    }
}