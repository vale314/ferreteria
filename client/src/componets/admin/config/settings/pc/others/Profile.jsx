import React from 'react'
import { Form } from 'semantic-ui-react'
import {Button} from 'semantic-ui-react'
import RaisedButton from 'material-ui/RaisedButton'
import { Checkbox, Label } from 'semantic-ui-react'

const ProfilePc = ({onChange,user,onSubmit,adminLenguageBoolean,handleClickRoutes,onClickCheck}) =>(
    <div style={{marginTop:'50px',marginLeft:'15%',marginRight:'15%'}}>
    <Form onSubmit={onSubmit}>
        <Form.Group>
            <Form.Input label={adminLenguageBoolean ? 'Primer Nombre' : 'First Name'} placeholder="Valentin" width={6} value={user.firstName} onChange={onChange} name='firstName'/>
            <Form.Input label={adminLenguageBoolean ? 'Segundo Nombre' :'Middle Name'} placeholder="Alejandro" width={4} value={user.middleName}  onChange={onChange} name='middleName' />
            <Form.Input label={adminLenguageBoolean ? 'Ultimo Nombre' : 'Last Name'} placeholder="Ruiz Ortiz" width={6} value={user.lastName} onChange={onChange} name='lastName' />
        </Form.Group>
        <Form.Group>
            <Form.Input label={adminLenguageBoolean ? 'Compañia' : 'Company'} placeholder='Walmart' width={3} name='company' value={user.company} onChange={onChange} />
            <Form.Input label={adminLenguageBoolean ? 'Domicilio' : 'Direction'} placeholder={adminLenguageBoolean ? `Calle, #Numero, Colonia, Estado, Pais` : `Street, #Number, Province, State, Contry`} width={12} name='direction' value={user.direction} onChange={onChange} disabled={user.showDirection}/>
            <Label style={{background:'transparent'}}>    
                <Checkbox style={{marginTop:'10px'}} label={adminLenguageBoolean ? 'No Mostrar Domicilio' : 'Not Show Direction'} checked={user.showDirection} onClick={onClickCheck} name='showDirection' />
            </Label>
        </Form.Group>

            <Form.Input  control={'TextArea'} label={adminLenguageBoolean ? 'Description De La Compañia' : 'Description Of Company'} placeholder='.....' value={user.description} onChange={onChange} name='descriptionCompany' />

        <div className='Button' style={{marginBottom:'10%'}}>
            <Button id='BACK' onClick={handleClickRoutes} content={adminLenguageBoolean ? 'Volver': 'Back'} />
            <RaisedButton type='submit' label={adminLenguageBoolean ? 'Cambiar': 'Change'} primary/>
        </div>   
    </Form>

    </div>   
)

export default ProfilePc