
import React from 'react'
import { Container , Button, Checkbox, Icon, Table, Form , Modal} from 'semantic-ui-react'

const Cuentas = ({handleClickView}) => (
  <Container style={{ marginTop:'5%'}}>
        <Table compact celled definition>
        <Table.Header>
            <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Registration Date</Table.HeaderCell>
            <Table.HeaderCell>E-mail address</Table.HeaderCell>
            <Table.HeaderCell>Premium Plan</Table.HeaderCell>
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
                        <Icon name='user' /> Add User
                    </Button>}>
                    <Modal.Header>Select a Photo</Modal.Header>
                        <Modal.Content>
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
                        </Modal.Content>
                </Modal>    


                <Button size='small'>Approve</Button>
                <Button disabled size='small'>Approve All</Button>
            </Table.HeaderCell>
            </Table.Row>
        </Table.Footer>
        </Table>

  </Container>

)

export default Cuentas