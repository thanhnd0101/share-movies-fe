import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"
import user from "../modules/MainPage/shared/reducers"


const rootReducer = combineReducers({
    user: user
})

const configureStore = () => {
    return createStore(
        rootReducer,
        compose(applyMiddleware(thunk))
        )
}

export default configureStore