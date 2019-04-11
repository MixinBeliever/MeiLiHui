import { combineReducers, createStore } from 'redux'

var reducer = (prevState=true,action={})=>{
    var { type , payload } = action;
    console.log(action)
    switch(type){
        case 'hideHeaderbar':
            return payload;
        case 'showHeaderbar':
            return payload;
        default:
            return prevState;    
    }
    return prevState
}

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
