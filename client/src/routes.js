import React from 'react';
import { Switch, Route, Miss} from 'react-router-dom'
import Admin from './containers/login/Login.jsx'

const Main = () => (

    <Switch>
      <Route path='/login/admin' component={Admin}/>
    </Switch>

)

export default Main;
