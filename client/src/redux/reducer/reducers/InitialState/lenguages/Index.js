export default function reducer(state={
    personLenguage:'ES'
  }, action) {

    switch (action.type) {
      case "personLenguage": {
        return {...state, personLenguage: action.payload}
      }
    }

    return state
}
