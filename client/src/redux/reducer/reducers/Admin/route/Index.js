export default function reducer(state={
    route:'/'
  }, action) {

    switch (action.type) {
      case "SAVE_ROUTE": {
        return {...state, route: action.route}
      }
    }

    return state
}
