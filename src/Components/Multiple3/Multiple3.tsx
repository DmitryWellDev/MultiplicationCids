import React, {ChangeEvent, useEffect, useState} from 'react'
import styles from './Multiple3.module.css'
import {CheckingImage} from "../CheckingImage/CheckingImage";



export const Multiple3 = () => {
    let multiplier = 3

    let [arrayOfTasks, setArrayOfTasks] = useState<Array<{mult: number, isWrong: boolean | null}>>([])

    //let [answersArr, setAnswersArr] = useState<Array<string>>([])

    let [rightImage, setRightImage] = useState<boolean>(false)

    useEffect(() => {
        let arrayOfTasks: Array<{mult: number, isWrong: boolean | null}> = []
        for (let i: number = 1; i < 11; i++) {
            arrayOfTasks.push({mult: i, isWrong: null})
            setArrayOfTasks(arrayOfTasks)
        }
    }, [])

    // let w: Array<string> = []
    // w[0] = '0'
    //
    // const getInpValue = (value: string) => {
    //     if (value !== '1') {
    //         w.push(value)
    //     }
    //
    //     if (w.length == 7) {
    //         setAnswersArr(w)
    //     }
    //     if(
    //         w[0] === '' &&
    //         w[1] === '4' &&
    //         w[2] === '6' &&
    //         w[3] === '8' &&
    //         w[4] === '10' &&
    //         w[5] === '12' &&
    //         w[6] === '14' &&
    //         w[7] === '16' &&
    //         w[8] === '18' &&
    //         w[9] === '20',
    //          w[0] === '4'
    //     ) {
    //         alert('you did it!')
    // }

    return (
        <div className={styles.main}>
            {arrayOfTasks.map((el, index) => {
                return (
                    <div key={index}>{multiplier} * {el.mult} = <input onChange={
                        (e: ChangeEvent<HTMLInputElement>) => {

                            if (e.currentTarget.value === `${multiplier * el.mult}`) {
                                arrayOfTasks[index] = {...arrayOfTasks[index], isWrong: true}
                                setArrayOfTasks([...arrayOfTasks])
                                setRightImage(rightImage = true)
                            }else {
                                arrayOfTasks[index] = {...arrayOfTasks[index], isWrong: false}
                                setArrayOfTasks([...arrayOfTasks])
                                setRightImage(rightImage = false)
                            }
                        }
                    } className={el.isWrong ? `${styles.inputStyle} ${styles.positiveInp}` : `${styles.inputStyle} ${styles.negativeInp}`}
                    />
                    </div>
                )
            })}
            {/*----------------------------------------------------------------------------------------------------*/}
            {/*image under the table*/}
            <CheckingImage multipleResult={rightImage}/>
        </div>
    )
}
