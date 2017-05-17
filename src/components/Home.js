import React, { Component } from 'react'
import Header from './Header'
import { NavLink } from 'react-router-dom'


import { Container,
         Row,
         Col,
         Button, 
         ButtonGroup } from 'reactstrap'

class Home extends Component {

    render(){
        return(
            <Container>
                <Header />
            </Container>
        )
    }
}

export default Home

