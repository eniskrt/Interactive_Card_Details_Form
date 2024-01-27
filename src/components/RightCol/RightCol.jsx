import { useFormik } from "formik";
import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import * as Yup from "yup";
import "./right-col.scss"

const RightCol = ({setSuccess, setData}) => {

  const initialValues ={
    cardHolderName:"",
    cardNumber:"",
    expDateMM:"",
    expDateYY:"",
    cvc:""
  }

  const validationSchema = Yup.object({
    cardHolderName:Yup
            .string()
            .required("Can't be blank"),
    cardNumber:Yup
            .string()
            .max(19,"Can't be longer")
            .matches(/([0-9]+( [0-9]+)+)/,"Wrong format, numbers only")
            .required("Can't be blank"),
    expDateMM:Yup
            .string()
            .min(2,"Can't be shorter")
            .max(2,"Can't be longer")
            .required("Can't be n-blank"),
    cvc:Yup
            .string()
            .min(3,"Can't be shorter")
            .max(3,"Can't be longer")
            .required("Can't be  blank"),
  })
  
  const onSubmit = (values) => {
    console.log(values);
    formik.resetForm();
    setSuccess(true)
    setData(formData)
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

  const formData ={
    cardHolderName:formik.values.cardHolderName,
    cardNumber:formik.values.cardNumber,
    expDateMM:formik.values.expDateMM,
    expDateYY:formik.values.expDateYY,
    cvc:formik.values.cvc
  }
  

  return (
    <Col className="right-col">
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-4">
          <Form.Label>CARDHOLDER NAME</Form.Label>
          <Form.Control 
              type="text" 
              className="input"
              placeholder="e.g. Jane Appleseed" 
              {...formik.getFieldProps("cardHolderName")}
              isInvalid={formik.touched.cardHolderName && formik.errors.cardHolderName}
              />
          <Form.Control.Feedback type="invalid">
            {formik.errors.cardHolderName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>CARD NUMBER</Form.Label>
          <Form.Control 
              type="text" 
              className="input" 
              placeholder="e.g. 1234 5678 9123 0000"
              {...formik.getFieldProps("cardNumber")}
              isInvalid={formik.touched.cardNumber && formik.errors.cardNumber}
              />
          <Form.Control.Feedback type="invalid">
              {formik.errors.cardNumber}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="d-flex gap-4 mb-4">
          <div className="row">
            <div className="col-6">
              <Form.Group>
                <Form.Label>EXP. DATE (MM/YY)</Form.Label>
                <div className="d-flex align-items-center  justify-content-center  gap-2">
                  <Form.Control 
                      type="text" 
                      className="input"
                      placeholder="MM"
                      {...formik.getFieldProps("expDateMM")}
                      isInvalid={formik.touched.expDateMM && formik.errors.expDateMM} 
                      />
                  <Form.Control 
                      type="text" 
                      className="input"
                      placeholder="YY"
                      {...formik.getFieldProps("expDateYY")}
                      isInvalid={formik.touched.expDateYY && formik.errors.expDateYY}
                      />
                </div>
                <Form.Control.Feedback type="invalid">
                      {formik.errors.expDateMM || formik.errors.expDateYY}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-6">
              <Form.Group>
                <Form.Label>CVC</Form.Label>
                <Form.Control 
                      type="text" 
                      className="input" 
                      placeholder="e.g. 123"
                      {...formik.getFieldProps("cvc")}
                      isInvalid={formik.touched.cvc && formik.errors.cvc}
                      />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.cvc}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
          </div>
        </Form.Group>
        <Button type="submit">Confirm</Button>
      </Form>
    </Col>
  );
};

export default RightCol;
