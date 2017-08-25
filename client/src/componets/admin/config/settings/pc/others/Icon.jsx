import React from 'react';
import {Icon, Image } from 'semantic-ui-react'
import * as Semantic from 'semantic-ui-react' 



const CardExampleExpandable = ({adminLenguageBoolean}) => (
  <div>
        <div style={{textAlign:'center' , backgroundImage: 'https://static.pexels.com/photos/215/road-sky-clouds-cloudy.jpg', marginLeft:'100px', marginRight:'100px'}}>
         <Semantic.Card centered >
            <Image src='https://pbs.twimg.com/profile_images/425000350202867713/omeMN2VM.jpeg'/>
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
              <a>
                <Icon name='user' />
                {adminLenguageBoolean ? 'Editar': 'Edit'}
              </a>
            </Semantic.Card.Content>
          </Semantic.Card>
        </div>
       
   </div> 
);

export default CardExampleExpandable;
