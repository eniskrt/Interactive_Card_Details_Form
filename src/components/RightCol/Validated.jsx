import React from 'react'
import { Button, Col, Image } from 'react-bootstrap'
import "./validated.scss"

const Validated = ({setSuccess}) => {
  return (
    <Col className='validated'>
        <Image src='images/icon-complete.svg'/>
        <h1>THANK YOU!</h1>
        <p>We've added your card details</p>
        <Button onClick={()=>setSuccess(false)}>Continue</Button>
    </Col>
  )
}

export default Validated
