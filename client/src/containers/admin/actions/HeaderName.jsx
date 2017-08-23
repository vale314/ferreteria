

export function HeaderNameEs(header){

  return function(dispatch,getState){
        dispatch({type:'SAVE_HEADER_NAME_ES',headerName:header})

  }

 }

 export function HeaderNameEn(header){
      
        return function(dispatch,getState){
              dispatch({type:'SAVE_HEADER_NAME_EN',headerName:header})
      
        }
      
       }