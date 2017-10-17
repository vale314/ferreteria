
import React from 'react'
import { Container , Button, Checkbox, Icon, Table, Form, Modal} from 'semantic-ui-react'
import Tables from '../common/Table.jsx'
import styles from './styles.css'

const Cuentas = ({visible, handleClickView}) => (
  <div>
    <Container style={{display:'block', marginTop:'5%'}}>
      <Tables handleClickView={handleClickView} />
      
    </Container>

    
  </div>
  
)

export default Cuentas