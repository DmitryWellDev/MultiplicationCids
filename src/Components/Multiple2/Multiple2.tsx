import React, {ChangeEvent, useState} from 'react'
import styles from './Multiple2.module.css'
import {CheckingImage} from "../CheckingImage/CheckingImage";



export const Multiple2 = () => {
    let multiplier = 2
    let s: Array<number> = []
    for (let i: number = 1; i < 11; i++) {
        s.push(i)
    }

    let [multipleResult, setMultipleResult] = useState<boolean | null>(null)

    let [answersArr, setAnswersArr] = useState<Array<string>>([])

    let w: Array<string> = []
    w[0] = '0'

    const getInpValue = (value: string) => {
        if (value !== '1') {
            w.push(value)
        }
        if (w.length == 7) {
            setAnswersArr(w)
        }
        console.log(w);
        /*if(
            // w[0] === '' &&
            // w[1] === '4' &&
            // w[2] === '6' &&
            // w[3] === '8' &&
            // w[4] === '10' &&
            // w[5] === '12' &&
            // w[6] === '14' &&
            // w[7] === '16' &&
            // w[8] === '18' &&
            // w[9] === '20'
            //  w[0] === '4'
        ) {
            alert('you did it!')
        }*/
    }
    return (
        <div className={styles.main}>
            {s.map((el, index) => <div key={index}>{multiplier} * {el} = <input onChange={
                (e: ChangeEvent<HTMLInputElement>) => {
                    if (e.currentTarget.value === `${multiplier * el}` || e.currentTarget.value === '1') {
                        setMultipleResult(multipleResult = true)
                    } else {
                        setMultipleResult(multipleResult = false)
                    }
                    getInpValue(e.currentTarget.value)
                }} className={multipleResult ? `${styles.inputStyle} ${styles.positiveInp}` : `${styles.inputStyle} ${styles.negativeInp}`}
            />
            </div>)}
            {/*----------------------------------------------------------------------------------------------------*/}
            {/*image under the table*/}
            <CheckingImage multipleResult={multipleResult}/>
        </div>
    )
}
