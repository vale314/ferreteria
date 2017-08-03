import React from 'react';


import Settings from '../../../../containers/admin/config/settings/Body.jsx'

import { Switch, Route, Miss} from 'react-router-dom'

const CardExampleExpandable = () => (
  <div>
    <Switch>
      <Route path='/adm/settings' component={Settings} />
    </Switch>
  </div>

)

export default CardExampleExpandable;
