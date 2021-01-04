import React from 'react'
import styles from "../Multiple2/Multiple2.module.css";

type PropsType = {
    multipleResult: boolean | null
}

export const CheckingImage = (props: PropsType) => {
    return (
        <div>
            <img className={styles.imgStyle} src={props.multipleResult
                ? 'https://i.pinimg.com/originals/01/fb/2c/01fb2cb2cf0855514cf1df69f46acda8.gif'
                : 'https://media1.tenor.com/images/d3fb3b41f9acae3e80bb6269686e68c5/tenor.gif?itemid=11347556'}/>
        </div>
    )
}