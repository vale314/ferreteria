export function LENGUAGES(lenguage) {

   return function(dispatch,getState){

           dispatch({type:'lenguage',payload:lenguage})
           localStorage.setItem('reduxState',JSON.stringify(getState()))

   }
 }
