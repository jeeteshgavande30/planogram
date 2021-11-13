import React from 'react'
import Card from './Card';
import styles from "./container1.module.css"
const Container1 = (props) => {
    const list = []
    for(var i=0;i<eval(props.data.row);i++){
        for(var j=0;j<eval(props.data.column);j++){
            list.push(<Card text={`${i}, ${j}`} onSelectData={props.onSelectData} color={props.data.color}></Card>);
        }
    }
    console.log(props.data)
    return (
        <div className={styles.cover}>
            <h2 className={styles.title}>Planogram Boxes</h2>
            <div className={styles.container1}>
            {
               list.map(ele => {
                   return ele;
               }) 
            }
        </div>
        </div>
    )
}
 export default Container1;