import React from 'react';
import {Icon, Image } from 'semantic-ui-react'
import * as Semantic from 'semantic-ui-react' 



const CardExampleExpandable = ({adminLenguageBoolean, handleClickRoutes}) => (
  <div>
         <Semantic.Card centered style={{ paddingRight:'0px'}}>
            <Image src='https://pbs.twimg.com/profile_images/425000350202867713/omeMN2VM.jpeg' style={{marginLeft:'0%', marginRight:'0%'}}/>
            <Semantic.Card.Content>
              <Semantic.Card.Header>
                Valentina
              </Semantic.Card.Header>
              <Semantic.Card.Meta>
                <span className='date'>
                  Administrador
                </span>
              </Semantic.Card.Meta>
              <Semantic.Card.Description>
                Matthew is a musician living in Nashville.
              </Semantic.Card.Description>
            </Semantic.Card.Content>
            <Semantic.Card.Content extra>
              <a id='PROFILE' onClick={handleClickRoutes}>
                <Icon name='user' onClick={handleClickRoutes}  />
                {adminLenguageBoolean ? 'Editar': 'Edit'}
              </a>
            </Semantic.Card.Content>
          </Semantic.Card>
       
   </div> 
);

export default CardExampleExpandable;
