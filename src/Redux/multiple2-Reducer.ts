type InitialStateTaskType = {
    id: number
    currentAnswer: null | string
    isRight: null | boolean
    rightAnswer: string
}

type SetAnswerActoinType = {
    type: 'SET-ANSWER'
    taskAnswer: string
    taskId: number
}

type ActionsType = SetAnswerActoinType

export type InitialStateTasksType = Array<InitialStateTaskType>

const initialState: InitialStateTasksType = [
    {id: 1, currentAnswer: null, isRight: null, rightAnswer: '2'},
    {id: 2, currentAnswer: null, isRight: null, rightAnswer: '4'},
    {id: 3, currentAnswer: null, isRight: null, rightAnswer: '6'},
    {id: 4, currentAnswer: null, isRight: null, rightAnswer: '8'},
    {id: 5, currentAnswer: null, isRight: null, rightAnswer: '10'},
    {id: 6, currentAnswer: null, isRight: null, rightAnswer: '12'},
    {id: 7, currentAnswer: null, isRight: null, rightAnswer: '14'},
    {id: 8, currentAnswer: null, isRight: null, rightAnswer: '16'},
    {id: 9, currentAnswer: null, isRight: null, rightAnswer: '18'},
    {id: 10, currentAnswer: null, isRight: null, rightAnswer: '20'},
]

export const multiple2Reducer = (state: InitialStateTasksType = initialState, action: ActionsType): InitialStateTasksType => {
    switch (action.type) {
        case "SET-ANSWER": {
        let task = state.find((el) => {el.id === action.taskId})
            if (task) {
                if(action.taskAnswer === task.rightAnswer) {
                    task.currentAnswer = task.rightAnswer
                    task.isRight = true
                }
            }
            return [...state]
            }
        default:
            return state
    }
}

export const setAnswerAC = (taskAnswer: string, taskId: number) => {
    return {type: 'SET-ANSWER', taskAnswer, taskId}
}