export * from './linklayer/LinkLayer'
export * from './mainview/MainView';
export * from './table/Table';
import {TextViewer} from './textviewer/TextViewer';


import * as core from '../core'
core.componentMrg.register('text',TextViewer);