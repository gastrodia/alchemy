import * as React from "react";
import * as core from '../../core'
import * as styles from './linklayer.css'
export class LinkLayer extends React.Component<any, any> {
    public get doc(): core.Document {
        return this.props.doc;
    }

    constructor(){
        super();

        core.broadcast.on('entity-position-change',()=>{
            this.forceUpdate();
        })
    }


    private getInnerOrder(entity:core.Entity,inner:core.Entity){
        var order = 0;
        for(var i in entity.iners){
            order += 1;
            if(entity.iners[i] == inner){
                break;
            }
        }
        return order;
    }

    private getOuterOrder(entity:core.Entity,outer:core.Entity){
        var order = 0;
        for(var i in entity.outers){
            order += 1;
            if(entity.outers[i] == outer){
                break;
            }
        }
        return order;
    }

    private getEntityOuterLink(entity:core.Entity,outer:core.Entity){
        var outerOrder = this.getOuterOrder(entity,outer);
        var innerOrder = this.getInnerOrder(outer,entity);
        var start = {x:entity.position.x + entity.size.width,y:entity.position.y + 20 + outerOrder*4};
        var end = {x:outer.position.x,y:outer.position.y + 20 + innerOrder*4};
        var middle = {x:(start.x + end.x)/2,y:(start.y + end.y)/2};
        var ctrl = {x:start.x + Math.abs((end.x - start.x )/5),y:start.y + 0}

        var curve = `M${start.x},${start.y} Q${ctrl.x},${ctrl.y} ${middle.x},${middle.y} T${end.x} ${end.y}`    
    
        return      <path d={curve} key={outer.id}
                            fill="none" stroke="#000"  strokeWidth="2px" />
        
    }

    private getLinks(links: Array<any>, entitys: Array<core.Entity>) {
        for (var i in entitys) {
            var entity = entitys[i];
            for (var j in entity.outers) {
                var outer = entity.outers[j];
                links.push(
                    this.getEntityOuterLink(entity,outer)
                )
            }

            this.getLinks(links, entity.outers)
        }
    }

    render() {
        var links: any = [];
        this.getLinks(links, this.doc.entitys)
        return <div className={styles.linklayer}>
            <svg xmlns="http://www.w3.org/svg/2000" className={styles.linkcanvas}>
                {links}   
            </svg>   
        </div>;
    }
}