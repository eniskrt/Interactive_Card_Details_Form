import React from 'react'
import { Button, Col, Image } from 'react-bootstrap'
import "./validated.scss"

const Validated = ({setSuccess, setData}) => {


  const returnDetailsPage = () => { 
    setSuccess(false);
      setData({
        cardHolderName:"Jane Appleseed",
      cardNumber:"0000 0000 0000 0000",
      expDateMM:"00",
      expDateYY:"00",
      cvc:"000"
      })
   }
   
   

  return (
    <Col className='validated'>
        <Image src='images/icon-complete.svg'/>
        <h1>THANK YOU!</h1>
        <p>We've added your card details</p>
        <Button onClick={()=>returnDetailsPage()}>Continue</Button>
    </Col>
  )
}

export default Validated
