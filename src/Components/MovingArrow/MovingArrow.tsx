import React from 'react'
import styles from './MovingArrow.module.css'

export const MovingArrow = () => {
    return(
        <div className={styles.movingArrow_wrap}>
            <p className={styles.movingArrow_title}>Choose something here</p>
            <img className={styles.arrow} src="https://media.giphy.com/media/ZcuJz2RkQdaiVv3cvc/giphy.gif"/>
        </div>
    )
}