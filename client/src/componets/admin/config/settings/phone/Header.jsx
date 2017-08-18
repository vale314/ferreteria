import React from 'react';
import { Header} from 'semantic-ui-react'




const CardExampleExpandable = ({adminLenguageBoolean}) => (
  <div>
        <Header as='h2' textAlign='center'>
            {adminLenguageBoolean ? 'Sistema' : "Settings"}
        </Header>
  </div>
);

export default CardExampleExpandable;
