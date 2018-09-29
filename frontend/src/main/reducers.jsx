import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer'

const rootReduce = combineReducers({
    todo: todoReducer
})

export default rootReduce