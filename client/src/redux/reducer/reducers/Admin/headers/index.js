export default function reducer(state={
    headerNameEs:'',
    headerNameEn:''
},action){
    switch(action.type){
        case 'SAVE_HEADER_NAME_ES':{
            return{...state, headerNameEs:action.headerName}
        }
        case 'SAVE_HEADER_NAME_EN':{
            return{...state, headerNameEn:action.headerName}
        }
    }
    return state
}