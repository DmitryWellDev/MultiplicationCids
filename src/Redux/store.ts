import {combineReducers, createStore} from 'redux';
import {multiple2Reducer} from "./multiple2-Reducer";

const rootReducer = combineReducers({
        tasks2: multiple2Reducer
})

export let store = createStore(rootReducer)

export type RootStateType = ReturnType<typeof rootReducer>


//window.store = store;
