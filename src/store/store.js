import { combineReducers, createStore } from 'redux'
import headerbarReducer from './reducers/headerbarReducer'

var reducer = combineReducers({
    headerbarReducer,
})

const store = createStore(reducer,)

export default store;

/**
 * 
 * import { createStore } from 'redux';
        var reducer = (prevState,action)=>{ 
            return prevState
        }
        const store = createStore()     //传递reducer，这样任何状态的修改都会通过reducer来处理
        export default store
 */
