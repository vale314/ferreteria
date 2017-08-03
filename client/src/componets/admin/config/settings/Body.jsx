import React from 'react';
import { Header, Segment} from 'semantic-ui-react'
import FlatButton from 'material-ui/FlatButton';




const CardExampleExpandable = ({adminLenguage,handleClick}) => (
  <div>
                <div style={{textAlign:'center'}}>

                <FlatButton label="ES" style={{padding:'0px'}}
                 onTouchTap={()=>handleClick('ES')}
                  disabled={adminLenguage =='ES' ? true: false }/>

                <FlatButton label="EN" style={{padding:'0px'}}
                 onTouchTap={()=>handleClick('EN')}
                  disabled={adminLenguage =='EN' ? true: false}/>
                </div>
  </div>
);

export default CardExampleExpandable;
