import React from 'react'
import styles from './Entry.module.css'

type EntryPropsType = {
    startHandler:() => void
}

export const Entry = (props: EntryPropsType) => {

    let startHandler = () => {
        props.startHandler()
    }

    return(
        <div>
            <div className={styles.entryTitle_wrap}><h1 className={styles.entryTitle}>If you realy wont to check how well you know
                multiplication table<br/> click here my friend</h1></div>
            <button className={styles.entryButton} onClick={startHandler}>Start</button>
        </div>
    )
}