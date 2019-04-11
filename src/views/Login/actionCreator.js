const hideHeaderbar = ()=>({
        type: 'hideHeaderbar',
        payload: false,
})
const showHeaderbar = ()=>({
        type: 'showHeaderbar', 
        payload: true,   //需要隐藏
})

export { hideHeaderbar, showHeaderbar }