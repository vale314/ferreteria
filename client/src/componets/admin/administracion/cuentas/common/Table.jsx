
import React from 'react'
import { Container , Button, Checkbox, Icon, Table, Form , Modal} from 'semantic-ui-react'

const Cuentas = ({handleClickView, adminLenguageBoolean, onChange, user}) => (
  <Container style={{ marginTop:'5%'}}>
        <Table compact celled definition>
        <Table.Header>
            <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>{adminLenguageBoolean ? 'Nombre' : 'Name'}</Table.HeaderCell>
            <Table.HeaderCell>{adminLenguageBoolean ? 'Fecha De Registro' : 'Registration Date'}</Table.HeaderCell>
            <Table.HeaderCell>E-mail </Table.HeaderCell>
            <Table.HeaderCell>{adminLenguageBoolean ? 'Activo' : 'active'}</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            <Table.Row>
            <Table.Cell collapsing>
                <Checkbox slider />
            </Table.Cell>
            <Table.Cell>John Lilki</Table.Cell>
            <Table.Cell>September 14, 2013</Table.Cell>
            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
            <Table.Cell>No</Table.Cell>
            </Table.Row>
            <Table.Row>
            <Table.Cell collapsing>
                <Checkbox slider />
            </Table.Cell>
            <Table.Cell>Jamie Harington</Table.Cell>
            <Table.Cell>January 11, 2014</Table.Cell>
            <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
            </Table.Row>
            <Table.Row>
            <Table.Cell collapsing>
                <Checkbox slider />
            </Table.Cell>
            <Table.Cell>Jill Lewis</Table.Cell>
            <Table.Cell>May 11, 2014</Table.Cell>
            <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
            </Table.Row>
        </Table.Body>

        <Table.Footer fullWidth>
            <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan='4'>
                


                
                <Modal trigger={
                    <Button floated='right' icon labelPosition='left' primary size='small' onClick={handleClickView}>
                        <Icon name='user' /> {adminLenguageBoolean ? 'Agregar Usuario' : 'Add User'}
                    </Button>}>
                    <Modal.Header>{adminLenguageBoolean ? 'Agregar Usuario' : 'Add User'}</Modal.Header>
                        <Modal.Content>
                            <Form>
                                <Form.Field>
                                    <label>{adminLenguageBoolean ? 'Nombre' : 'Name'}</label>
                                    <input  onChange={(e)=>onChange(e,'name')} placeholder={adminLenguageBoolean ? 'Nombre' : 'Name'} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Email</label>
                                    <input onChange={(e)=>onChange(e,'email')} placeholder='Email' />
                                </Form.Field>
                                <Form.Field>
                                    <Checkbox onChange={()=>onChange('ACTIVE')} label={adminLenguageBoolean ? 'Activo' : 'Active'} />
                                </Form.Field>
                                    <Button type='submit'>{adminLenguageBoolean ? 'Registrar' : 'Submit'}</Button> 
                            </Form>
                        </Modal.Content>
                </Modal>    



            </Table.HeaderCell>
            </Table.Row>
        </Table.Footer>
        </Table>

  </Container>

)

export default Cuentas