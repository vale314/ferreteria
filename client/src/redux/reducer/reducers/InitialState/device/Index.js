export default function reducer(state = {}){
  if(state.isMobile != undefined){
    if(initialState.device == 'false'){
      return {...state,isMobile:false}
    }
    if(initialState.device == 'true'){
      return {...state,isMobile:true}
    }
  }

  return state


}
