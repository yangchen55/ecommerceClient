import React, { useRef, useEffect } from 'react'
import { Container, Form, Button, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import { loginAction } from './authAction'





const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const emailRef = useRef("");
    const passRef = useRef("");
    const { isLoading, user } = useSelector((state) => state.user)



    const handleOnSubmit = (e) => {
        e.preventDefault()
        const formDt = {
            email: emailRef.current.value,
            password: passRef.current.value
        }
        if (!formDt.email || !formDt.password) {
            return alert("please filll in both the fields")

        }
        dispatch(loginAction(formDt))



    }
    useEffect(() => {
        user?._id && navigate("/dashboard")
        // todo router private
    }, [user, navigate])

    return (
        <div>


            <Header />
            <div className='main login-page  '>
                <Container className='d-flex justify-content-around' >
                    <Form className='border p-4 m-5 rounded bg-white shadow-lg' style={{ width: "500px" }} onSubmit={handleOnSubmit}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="tseyang9861@gmail.com" value="tseyang9861@gmail.com" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" ref={passRef} required />
                        </Form.Group>


                        <Button variant="danger" type="submit" >
                            {isLoading ? <Spinner animation='border' /> : "submit"}
                        </Button>
                        <br>
                        </br>
                        <div className='text-end' >

                            <Link to="/resetPassword" > Forget password? </Link>


                        </div>




                    </Form>

                </Container>



            </div>
            <Footer />
        </div >
    )
}

export default LoginPage