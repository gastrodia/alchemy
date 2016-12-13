import * as React from "react";
import * as styles from './table.css';
export class Table extends React.Component<any,any>{
    render(){
        return <div className={styles.table}>
            <div className={styles.row}>
                <div className={styles.cell}>A1</div>
                <div className={styles.cell}>B0</div>
            </div>
        </div>
    }
}
