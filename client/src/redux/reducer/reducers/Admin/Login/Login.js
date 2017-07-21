export default function reducer(state={
    token:'',
    error:{},
    state:''
  }, action) {

    switch (action.type) {
      case "SAVE_TOKEN": {
        return {...state, token: action.token}
      }
      case "ERROR_LOGIN":{
        return {...state, error:action.error}
      }
      case "SAVE_STATE_ADMIN_LOGIN":{
        return {...state, state:action.state}
      }
    }

    return state
}
