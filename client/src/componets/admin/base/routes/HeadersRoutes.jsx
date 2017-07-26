import React from 'react';


import AdminCuentas from '../../../../containers/admin/administracion/cuentas/Header.jsx'
import HeadersRoutes from '../../../../containers/admin/home/Header.jsx'
import noMatch from '../../404/404.jsx'

import { Switch, Route, Miss} from 'react-router-dom'

const CardExampleExpandable = () => (
  <div>
  <Switch>

    <Route exact path='/' component={HeadersRoutes} />
    <Route path='/adm/cuentas' component={AdminCuentas} />
    <Route component={noMatch} />
  </Switch>  
  </div>

)

export default CardExampleExpandable;
