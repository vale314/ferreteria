import React from 'react';
import { Switch, Route, Miss} from 'react-router-dom'
import ferreteriasLogin from './containers/ferreteria/login/Login.jsx'
import adminLogin from './containers/admin/login/Login.jsx'
import home from './containers/home/home.jsx'
import Auth from './modules/Auth'
import homeAdmin from './containers/admin/home/home.jsx'
import noMatch from './componets/404/index.jsx'
import AdminCuentas from './componets/admin/administracion/cuentas/index.jsx'
const Main = () => (

    <Switch>
      <Route path ='/' exact component={Indexs()}/>
      <Route path='/ferreterias' component={ferreteriasLogin}/>
      <Route path='/admins' component={adminLogin}/>
      <Route path='/cuentas' component={AdminCuentas} />
      <Route component={noMatch} />
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
