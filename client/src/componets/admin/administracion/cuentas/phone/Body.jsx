
import React from 'react'
import { Container , Button, Checkbox, Icon, Table, Form} from 'semantic-ui-react'
import Tables from '../common/Table.jsx'
import styles from './styles.css'

const Cuentas = ({visible, handleClickView}) => (
  <div>
    <Container style={{display:'block', marginTop:'5%'}}>
      <Tables handleClickView={handleClickView} />
      
    </Container>

    <Container style={{ marginTop:'5%'}} id={visible ? 'active': 'desactive'} >
        <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </Container>
  </div>
  
)

export default Cuentas