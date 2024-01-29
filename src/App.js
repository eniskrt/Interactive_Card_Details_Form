import {  Container, Row } from "react-bootstrap";
import LeftCol from "./components/LeftCol/LeftCol";
import RightCol from "./components/RightCol/RightCol";
import Validated from "./components/RightCol/Validated.jsx"
import { useEffect, useState } from "react";


function App() {

  const [success, setSuccess] = useState(false)
  const [data, setData] = useState({
    cardHolderName:"Jane Appleseed",
    cardNumber:"0000 0000 0000 0000",
    expDateMM:"00",
    expDateYY:"00",
    cvc:"000"
  })
  
  useEffect(() => {

  }, [data])

  return (
    <Container>
      <Row>
        <LeftCol data={data} success={success}/>
        {!success?(
          <RightCol setSuccess={setSuccess} setData={setData} success={success}/>
        ):(
          <Validated setSuccess={setSuccess} setData={setData}/>
        )}
        
      </Row>
    </Container>
  );
}

export default App;
