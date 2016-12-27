
import * as React from "react";
import * as ReactDOM from "react-dom";


import * as core from './core'
import * as components from './components'



var doc = new core.Document();
var entity = new core.TextEntity();
entity.text = 'boy';

var addBang = new core.TextTransfer(function(target:core.TextEntity){
    var entity = new core.TextEntity();
    entity.text = target.text+ '!';
    entity.addTransfer(sayHello)
    target.outers.push(entity)
    entity.iners.push(target);
})

addBang.title = 'addBang';

var sayHello = new core.TextTransfer(function(target:core.TextEntity){
    var entity = new core.TextEntity();
    entity.text = 'hello, ' + target.text+ '!';
    entity.addTransfer(addBang)
    target.outers.push(entity)
    entity.iners.push(target)
})

sayHello.title = 'sayHello';

entity.addTransfer(addBang)
entity.addTransfer(sayHello)

doc.entitys.push(entity);

(window as any).doc = doc;
ReactDOM.render(
    <components.MainView doc={doc}/>,
    document.getElementById("main")
);


// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// var renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.querySelector('#main').appendChild(renderer.domElement);

// var geometry = new THREE.BoxGeometry(1, 1, 1);
// var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// var cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// var render = function () {
//     //requestAnimationFrame(render);

//     //1
//     cube.rotation.x = Math.PI/4;
//     cube.rotation.y = Math.PI/4;
    
//     //2
//     cube.rotateX(Math.PI/4);
//     cube.rotateY(Math.PI/4);

//     //3
//     var euler = new THREE.Euler(Math.PI / 4, Math.PI / 4, 0, 'XYZ');
//     var matrix = new THREE.Matrix4();
//     matrix.makeRotationFromEuler(euler);
//     cube.applyMatrix(matrix)



//     // var matrix: any = new THREE.Matrix4();
//     // console.log(matrix.elements)
//     // // matrix.makeRotationX(Math.PI/4);
//     // // matrix.makeRotationY(Math.PI/4);
//     // matrix.rotateX(Math.PI / 4);
//     // matrix.rotateY(Math.PI / 4);
//     // console.log(matrix.elements)
//     // cube.applyMatrix(matrix)
//     // var euler = new THREE.Euler(Math.PI / 4, Math.PI / 4, 0, 'XYZ');
//     // cube.setRotationFromEuler(euler);
    

//     renderer.render(scene, camera);
// };

// render();