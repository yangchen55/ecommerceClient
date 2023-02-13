import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import CustomInput from '../../components/CustomInput'
import Footer from '../layout/Footer'
import Header from '../layout/Header'



const inputs = [

    {
        label: "email",
        type: "email",
        name: "email",
        placeholder: "@gmail.com",
        required: true

    },

    {
        label: "password",
        type: "password",
        name: "password",
        required: true


    }



]

const LoginPage = () => {
    const emailRef = useRef("");
    const passRef = useRef("");



    const handleOnSubmit = (e) => {
        e.preventDefault()
        const formDt = {
            email: emailRef.current.value,
            password: passRef.current.value
        }
        console.log(formDt)


    }

    return (
        <div>


            <Header />
            <div className='main login-page'>

                <Container className='m-3'>
                    <Form className='border p-4 rounded bg-white shadow-lg' onSubmit={handleOnSubmit}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" ref={passRef} required />
                        </Form.Group>

                        <Button variant="danger" type="submit" >
                            Submit
                        </Button>


                    </Form>
                </Container>


            </div>
            <Footer />
        </div>
    )
}

export default LoginPage