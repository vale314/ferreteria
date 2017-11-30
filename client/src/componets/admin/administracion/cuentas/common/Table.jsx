
import React from 'react'
import { Container , Button, Checkbox, Icon, Table, Form , Modal} from 'semantic-ui-react'


const Cuentas = ({handleClickView, adminLenguageBoolean, onChange, user, onSubmit , users}) => (
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

                {
                    users.map((items) => (
                        
                            <Table.Row key={items.email}> 
                                <Table.Cell collapsing>
                                    <Checkbox slider />
                                </Table.Cell>
                                <Table.Cell>valentine</Table.Cell>
                                <Table.Cell>22 de julio 2017</Table.Cell>
                                <Table.Cell>electrovale314@hotmail.com</Table.Cell>
                                <Table.Cell>true</Table.Cell>
                                <Table.Cell collapsing>
                                    <Button color='red'>{adminLenguageBoolean ? 'Eliminar' : 'Delete'}</Button>
                                </Table.Cell>
                            </Table.Row>
                                    
                    ))
                    
                }
                


               
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
                                <Form onSubmit={onSubmit}>
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