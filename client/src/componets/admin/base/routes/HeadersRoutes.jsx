import React from 'react';


import AdminCuentas from '../../../../containers/admin/administracion/cuentas/Header.jsx'
import HeadersRoutes from '../../../../containers/admin/home/Header.jsx'

import { Switch, Route, Miss} from 'react-router-dom'

const CardExampleExpandable = () => (
  <div>
    <Route exact path='/' component={HeadersRoutes} />
    <Route path='/adm/cuentas' component={AdminCuentas} />
  </div>

)

export default CardExampleExpandable;
