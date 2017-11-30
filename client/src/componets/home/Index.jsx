import React from 'react';
import { Header, Segment} from 'semantic-ui-react'
import RaisedButton from 'material-ui/RaisedButton';
import styles from './styles.css'



const CardExampleExpandable = ({handleClick,personLenguage}) => (


  <div id="div-principal">
    
    <Segment clearing className="header-home" style={{borderRadius:'0'}}>
        <Header as='h2' textAlign='center' style={{alignItems:'center'}}>
          {personLenguage=='ES' ? 'Introduccion' : 'Introduction'}
          <div style={{float:'right'}}>

            <RaisedButton label="ES" style={{padding:'0px'}}
             onTouchTap={()=>handleClick('ES')}
              disabled={personLenguage =='ES' ? true: false }/>

            <RaisedButton label="EN" style={{padding:'0px'}}
             onTouchTap={()=>handleClick('EN')}
              disabled={personLenguage =='EN' ? true: false}/>
          </div>
        </Header>

      </Segment>



      <header className="v-header container">
                    <div className="fullscreen-image-wrap">
                      <img src="https://static.pexels.com/photos/510332/pexels-photo-510332.jpeg" />
                    
                    </div>
                    <div className="header-overlay"></div>
                    <div className="header-content text-md-center">
                      <h1>Welcome Everyone</h1>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id temporibus perferendis necessitatibus numquam amet impedit explicabo? Debitis quasi ullam aperiam!</p>
                      <a className="btn">Find Out More</a>
                    </div>
                  </header>
                
                  
  </div>
);

export default CardExampleExpandable;
