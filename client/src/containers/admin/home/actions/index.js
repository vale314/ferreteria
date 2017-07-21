export function HANDLE_TAP_HOME(formData) {

   return function(dispatch,getState){
      dispatch({type:'HANDLE_TAP_HOME',open:!getState().homeHome.open})
   }
 }
