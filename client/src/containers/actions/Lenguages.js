export function LENGUAGES(lenguage) {

   return function(dispatch,getState){

           dispatch({type:'personLenguage',payload:lenguage})
           localStorage.setItem('reduxState',JSON.stringify(getState()))

   }
 }
