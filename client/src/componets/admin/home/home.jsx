import React from 'react';
//semantic-ui-react
import { Header, Segment,Button, Checkbox, Modal, Image, Icon} from 'semantic-ui-react'

  //dependencies
import Menu from './menu/index.jsx'


const CardExampleExpandable = () => (
  <div>
    <Segment clearing>
        <Header as='h2' textAlign='center'>
          <Menu/>
          <div style={{margin:'0',display:'inline'}}>
            HomePageAdmin
          </div>
        </Header>

    </Segment>
  </div>
);

export default CardExampleExpandable;
