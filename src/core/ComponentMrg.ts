import * as React from "react";

export type ReactComponentClass = typeof React.Component;

export class ComponentMrg{

    private _map:{[key:string]: ReactComponentClass} = {};

    public register(type:string,Component:ReactComponentClass){
        this._map[type] = Component;
    }

    public getComponentByType(type:string){
        return this._map[type];
    }

    private static _instance:ComponentMrg;
    public static getInstance(){
        if(!this._instance){
            this._instance = new ComponentMrg();
        }
        return this._instance;
    }
}