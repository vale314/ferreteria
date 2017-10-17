import React from 'react'
import CuentasContainer from '../../../../componets/admin/administracion/cuentas/pc/Body.jsx'

class Cuentas extends React.Component{
    constructor(props){
        super(props)
        this.state={
            visible:false
        }
        this.handleClickView = this.handleClickView.bind(this)
    }

    handleClickView(){
        this.setState({
            visible:!this.state.visible
        })
        
    }

    render(){
        return(<CuentasContainer visible={this.state.visible} handleClickView={this.handleClickView} />)
    }
}

export default Cuentas