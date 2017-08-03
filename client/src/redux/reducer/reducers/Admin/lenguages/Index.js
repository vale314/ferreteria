export default function reducer(state={
    adminLenguage:'ES'
  }, action) {

    switch (action.type) {
      case "adminLenguage": {
        return {...state, adminLenguage: action.payload}
      }
    }

    return state
}
