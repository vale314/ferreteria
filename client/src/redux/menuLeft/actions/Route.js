import {HANDLE_TAP_HOME} from './Open'

export function ROUTE(route,props) {

   return function(dispatch,getState){

           props.history.replace(route)
           dispatch(HANDLE_TAP_HOME())
   }
 }
