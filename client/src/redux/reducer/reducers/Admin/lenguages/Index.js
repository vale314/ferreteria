export default function reducer(state={
    lenguageAdmin:'ES'
  }, action) {

    switch (action.type) {
      case "lenguageAdmin": {
        return {...state, lenguageAdmin: action.payload}
      }
    }

    return state
}
