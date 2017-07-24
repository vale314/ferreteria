import {HANDLE_TAP_HOME} from './Open'

export function ROUTE(route,props) {

   return function(dispatch,getState){

           props.history.replace(route)
           dispatch({type:'SAVE_ROUTE',route:route})
           dispatch(HANDLE_TAP_HOME())
           
   }
 }
