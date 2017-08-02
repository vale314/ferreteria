export const object = Object.assign({},JSON.parse(localStorage.getItem('reduxState')),{
  device:initialState.device,
  //moreVariablesReducers
})

export const saveItem=(state)=>{
  const reduxState = localStorage.getItem('reduxState')
  const objects = JSON.stringify(object)

  if(reduxState !== objects){
    return localStorage.setItem('reduxState',JSON.stringify(state))
  }

}
