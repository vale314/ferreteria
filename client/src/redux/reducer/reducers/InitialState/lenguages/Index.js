export default function reducer(state={
    lenguage:'ES'
  }, action) {

    switch (action.type) {
      case "lenguage": {
        return {...state, lenguage: action.payload}
      }
    }

    return state
}
