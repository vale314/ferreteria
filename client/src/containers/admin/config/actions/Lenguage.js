export function LENGUAGES(lenguage) {

   return function(dispatch,getState){
           dispatch({type:'adminLenguage',payload:lenguage})
           localStorage.setItem('reduxState',JSON.stringify(getState()))

   }
 }
