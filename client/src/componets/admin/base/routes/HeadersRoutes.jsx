import React from 'react';


import Cuentas from '../../../../containers/admin/administracion/cuentas/Header.jsx'
import Routes from '../../../../containers/admin/home/Header.jsx'
import Settings from '../../../../containers/admin/config/settings/Header.jsx'

import noMatch from '../../404/404.jsx'

import { Switch, Route, Miss} from 'react-router-dom'

const CardExampleExpandable = () => (
  <div>
  <Switch>

    <Route exact path='/' component={Routes} />
    <Route path='/adm/cuentas' component={Cuentas} />
    <Route path='/adm/settings' component={Settings} />

    <Route component={noMatch} />
  </Switch>
  </div>

)

export default CardExampleExpandable;
