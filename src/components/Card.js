import React from 'react'
import { useState } from 'react/cjs/react.development'
import styles from "./card.module.css"
const Card = (props) => {
    const [clicked, setClicked] = useState(false)
    const clickHandler = (e) => {
        props.onSelectData(`(${e.target.innerText})`)
        setClicked(true);
        console.log(props.color)

    }
    return (
        <div className={styles.card} style={{backgroundColor:clicked?props.color:"#999"}} onClick={clickHandler}>
            {props.text}
        </div>
    )
}

export default Card