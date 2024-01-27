import React from 'react'
import { Col, Image } from 'react-bootstrap'
import "./left-col.scss"

const LeftCol = ({data}) => {
  return (
    <Col className='left-col'>
        <div className='circle-big'></div>
        <div className='circle-small'></div>
        <Image 
            src='images/bg-card-front.png' 
            alt='card-front'
            className='card-front'/>
        <Image 
            src='images/bg-card-back.png'
            alt='card-back'
            className='card-back'/>
        <p>{data.cardNumber}</p>
        <div>
            <small>{data.cardHolderName}</small>
            <small>{data.expDateMM}/{data.expDateYY}</small>
        </div>
        <span className="cvc">{data.cvc}</span>
    </Col>
  )
}

export default LeftCol
