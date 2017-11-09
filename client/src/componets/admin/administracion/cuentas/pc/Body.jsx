
import React from 'react'
import { Container , Button, Checkbox, Icon, Table, Form, Modal} from 'semantic-ui-react'
import Tables from '../common/Table.jsx'
import styles from './styles.css'

const Cuentas = ({visible, handleClickView, adminLenguageBoolean, onChange, user}) => (
  <div>
    <Container style={{display:'block', marginTop:'5%'}}>
      <Tables   
        handleClickView={handleClickView} 
        onChange={onChange}
        adminLenguageBoolean={adminLenguageBoolean}
        user={user}
      />
      
    </Container>

    
  </div>
  
)

export default Cuentas