export default function reducer(state={
    adminLenguage:'ES',
    adminLenguageBoolean:true
  }, action) {

    switch (action.type) {
      case "adminLenguage": {
        return {...state, adminLenguage: action.payload}
      }
      case "adminLenguageBoolean": {
        return {...state, adminLenguageBoolean: action.payload}
      }
    }

    return state
}
