import React, {ChangeEvent, useState} from 'react'
import styles from './Multiple2.module.css'
import {CheckingImage} from "../CheckingImage/CheckingImage";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../Redux/store";
import {InitialStateTasksType, setAnswerAC} from "../../Redux/multiple2-Reducer";


export const Multiple2 = () => {

    const tasks2 = useSelector<RootStateType, InitialStateTasksType>(state => state.tasks2)
    console.log(tasks2)
    const dispatch = useDispatch();

    const setAnswer = (taskAnswer: string, taskId: number) => {
        const action = setAnswerAC(taskAnswer, taskId)
        dispatch(action)
    }
    return (
        <div className={styles.main}>
            {tasks2.map((el, index) => {
                <div key={index}> <input value={el.rightAnswer} onChange={(e) => {setAnswer(e.currentTarget.value, el.id)}}/></div>})
            }
        </div>
    )
}
