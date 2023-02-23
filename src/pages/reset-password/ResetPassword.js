import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import { Container, Form, Button, Spinner } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { postEmailVerify, tokenVerify } from '../../helper/axios'

const ResetPassword = () => {
    const [form, setForm] = useState({})
    const [emailexist, setEmailexist] = useState(false)
    const [email, setEmail] = useState({})


    const inputs = [
        {
            label: "otp",
            type: "number",
            name: "otp",
            required: true

        },

        {
            label: "new password",
            type: "password",
            name: "newPassword",
            required: true

        },
        {
            label: "confirm password",
            type: "password",
            name: "confirmPassword",
            required: true

        },



    ]


    const handleChange = (e) => {
        const { name, value } = e.target
        setEmail({
            ...form,
            [name]: value

        })
    }
    // console.log(emailexist, "test")
    // console.log(form)


    // for email checked
    const handleSubmit = async (e) => {
        e.preventDefault()
        // const { email } = email;
        const { status, message, user } = await postEmailVerify(email)
        toast[status](message)
        if (status === "success") {
            setEmailexist(true);


        }
        // console.log(user)
        // console.log(emailexist)


    }

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value

        })
    }



    const handleOnSubmit = async (e) => {
        e.preventDefault()
        const { confirmPassword, newPassword, otp } = form;


        if (confirmPassword !== newPassword) {
            toast.error('new password and confirm password do not match, try again please !', {
                position: toast.POSITION.BOTTOM_LEFT,
            });
            return
        }
        const token = otp

        const data = await tokenVerify({ token, email, newPassword })
        console.log(form, email)


    }
    return (
        <div>
            <Header />
            <div className='main login-page'>
                <Container className='m-3'>
                    {
                        (emailexist == false) ?
                            <Form className='border p-4 rounded bg-secondary shadow-lg' onSubmit={handleSubmit}>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name="email" type="email" placeholder="tseyang9861@gmail.com" required onChange={handleChange} />
                                </Form.Group>

                                <Button variant="danger" type="submit">
                                    Submit
                                </Button>


                            </Form>


                            :
                            <Form className='border p-4 rounded bg-secondary shadow-lg' onSubmit={handleOnSubmit}>
                                <h3> Reset Passowrd </h3>
                                <hr></hr>
                                {inputs.map((item, i) =>
                                    <CustomInput key={i} {...item} onChange={handleOnChange} />
                                )}
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>

                            </Form>











                    }














                </Container>






            </div>

            <Footer />
        </div>

    )
}

export default ResetPassword