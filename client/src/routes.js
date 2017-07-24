import React from 'react';
import { Switch, Route, Miss} from 'react-router-dom'

import ferreteriasLogin from './containers/ferreteria/login/Index.jsx'
import adminLogin from './containers/admin/login/Index.jsx'
import home from './containers/home/Index.jsx'

import Auth from './modules/Auth'

import indexAdmin from './containers/admin/Base/Index.jsx'
import noMatch from './componets/404/index.jsx'

const Main = () => (

    <Switch>
      <Route path ='/' exact component={Indexs()}/>
      <Route path='/ferreterias' component={ferreteriasLogin}/>
      <Route path='/admins' component={adminLogin}/>

      <Route path='/adm' component={indexAdmin} />
      <Route component={noMatch} />
    </Switch>

)

const Indexs = () =>{
    if(Auth.isUserAuthenticated()){
      if(Auth.isUserAuthenticated() === 'ADMIN' )
        return (indexAdmin)
    }else{
      return (home)
    }
}
export default Main;
