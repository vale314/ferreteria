import React from 'react'
import { Form } from 'semantic-ui-react'

const ProfilePc = ({onChange,user}) =>(
    <div style={{marginTop:'50px',marginLeft:'15%',marginRight:'15%'}}>
    <Form>
        <Form.Group>
            <Form.Input label='First name' placeholder='First Name' width={6} value={user.firstName} onChange={onChange}/>
            <Form.Input label='Middle Name' placeholder='Middle Name' width={4} />
            <Form.Input label='Last Name' placeholder='Last Name' width={6} />
        </Form.Group>
        <Form.Group>
            <Form.Input placeholder='2 Wide' width={2} />
            <Form.Input placeholder='12 Wide' width={12} />
            <Form.Input placeholder='2 Wide' width={2} />
        </Form.Group>
        <Form.Group>
            <Form.Input placeholder='8 Wide' width={8} />
            <Form.Input placeholder='6 Wide' width={6} />
            <Form.Input placeholder='2 Wide' width={2} />
        </Form.Group>
    </Form>

    </div>   
)

export default ProfilePc