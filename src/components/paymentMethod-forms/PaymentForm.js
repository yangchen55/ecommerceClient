import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { postNewPayment } from '../../pages/paymentMethod/payMethodAction';

const PaymentForm = () => {
    const dispatch = useDispatch();
    const [paymentMethod, setPaymentMethod] = useState({});

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setPaymentMethod({
            ...paymentMethod,
            [name]: value
        })
        console.log(paymentMethod)
    }



    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(postNewPayment(paymentMethod))
        console.log(paymentMethod)


    }

    return (
        <div>


            <Form
                className="text-center border p-4 rounded shadow-lg" onSubmit={handleOnSubmit}
            >
                <Row>
                    <Col>
                        <Form.Group as={Col} controlId="formGridState">
                            {/* <Form.Select onChange={(e) => setPaymentMethod(e.target.value)} name="paymentMethod"> */}
                            <Form.Select name="paymentMethod" onChange={handleOnChange} >
                                <option disabled>Choose...</option>
                                <option value="creditcard">Credit Card</option>
                                <option value="paypal">PayPal</option>
                            </Form.Select>




                        </Form.Group>
                        <br></br>
                        <Form.Control
                            placeholder="Description"
                            name="description"
                            onChange={handleOnChange}
                        />
                    </Col>
                    <Col>
                        <Button type="submit" variant="warning">
                            chooose payment plan
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div >
    )
}

export default PaymentForm