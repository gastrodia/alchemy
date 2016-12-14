import * as React from "react";
import * as ReactDOM from "react-dom";


import {Document} from './core/entity/Document';
import {TextEntity} from './core/entity/TextEntity';
import {MainView} from './components/mainview/MainView';

import * as addBang from './core/transfer/addBang'
import * as sayHello from './core/transfer/sayHello'



var doc = new Document();
var entity = new TextEntity();
entity.text = 'boy';

entity.transfers.push(addBang)
entity.transfers.push(sayHello)

doc.entitys.push(entity);

(window as any).doc = doc;
ReactDOM.render(
    <MainView doc={doc}/>,
    document.getElementById("main")
);