import React, {useState} from 'react'
import styles from './ReverseCount.module.css'

type ReverseCountPropsType = {
    hideReverseCount: () => void
}

export const ReverseCount = (props: ReverseCountPropsType) => {

    let [showThree, setShowThree] = useState<boolean>(true)
    let [showTwo, setShowTwo] = useState<boolean>(false)
    let [showOne, setShowOne] = useState<boolean>(false)

    let count = setTimeout(function () {
        setShowThree(showThree = false)
        setShowTwo(showTwo = true)
        setTimeout(function () {
            setShowTwo(showTwo = false)
            setShowOne(showOne = true)
            setTimeout(function ()  {
                props.hideReverseCount()
                }, 1000
            )
        }, 1000)
    }, 1000)

    return (
        <div className={styles.number_wrap}>
            {showThree  && <div className={styles.number}>3</div>}
            {showTwo && <div className={styles.number}>2</div>}
            {showOne && <div className={styles.number}>1</div>}
        </div>
    )
}