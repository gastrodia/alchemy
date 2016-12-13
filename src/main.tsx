import * as React from "react";
import * as ReactDOM from "react-dom";


import {Document} from './core/entity/Document';
import {TextEntity} from './core/entity/TextEntity';
import {MainView} from './components/MainView';
var doc = new Document();
var entity = new TextEntity();
entity.text = 'boy';
doc.entitys.push(entity);
ReactDOM.render(
    <MainView doc={doc}/>,
    document.getElementById("main")
);