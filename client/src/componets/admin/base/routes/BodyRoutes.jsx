import React from 'react';


import Settings from '../../../../containers/admin/config/settings/Body.jsx'
import SettingsEmail from '../../../../containers/admin/config/settings/others/Email.jsx'
import SettingsProfile from '../../../../containers/admin/config/settings/others/Profile.jsx'
import Cuentas from '../../../../containers/admin/administracion/cuentas/Index.jsx'
import { Switch, Route, Miss} from 'react-router-dom'

const CardExampleExpandable = () => (
  <div>
    <Switch>
      <Route exact path='/adm/settings' component={Settings} />
      <Route path='/adm/settings/email' component={SettingsEmail} />
      <Route path='/adm/settings/profile' component={SettingsProfile} />
      <Route path='/adm/cuentas' component={Cuentas} />
    </Switch>
  </div>

)

export default CardExampleExpandable;
