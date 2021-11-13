import React from 'react'
import styles from './table.module.css'

const Table =(props) => {
    return (
        <table className={styles.table}>
            <tr>
                <th>Category Name</th>
                <th>Category Color</th>
                <th>Row, Column Points</th>
            </tr>
            <tr>
                <td>{props.data.name}</td>
                <td><div style={{backgroundColor : props.data.color}}></div></td>
                <td>{props.data.selectedCard}</td>
            </tr>
        </table>
    )
}
export default Table