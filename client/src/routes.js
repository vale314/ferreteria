import React from 'react';
import { Switch, Route, Miss} from 'react-router-dom'
import ferreteriasLogin from './containers/ferreteria/login/Login.jsx'
import adminLogin from './containers/admin/login/Login.jsx'
import home from './containers/home/home.jsx'
import Auth from './modules/Auth'
import homeAdmin from './containers/admin/home/home.jsx'

const Main = () => (

    <Switch>
      <Route path='/ferreterias' component={ferreteriasLogin}/>
      <Route path='/admins' component={adminLogin}/>
      <Route path ='/' component={Indexs()}/>
    </Switch>

)

const Indexs = () =>{
    if(Auth.isUserAuthenticated()){
      if(Auth.isUserAuthenticated() === 'ADMIN' )
        return (homeAdmin)
    }else{
      return (home)
    }
}
export default Main;
