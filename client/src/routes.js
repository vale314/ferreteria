import React from 'react';
import { Switch, Route, Miss} from 'react-router-dom'
import ferreteriasLogin from './containers/ferreteria/login/Login.jsx'
import adminLogin from './containers/admin/login/Login.jsx'
const Main = () => (

    <Switch>
      <Route path='/ferreterias' component={ferreteriasLogin}/>
      <Route path='/admin' component={adminLogin}/>
    </Switch>

)

export default Main;
