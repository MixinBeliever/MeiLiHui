var headerbarReducer = (prevState=true,action={})=>{
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
    //return prevState
}
export default headerbarReducer