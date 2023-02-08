import React, { useState } from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import CustomInput from '../../components/CustomInput';
import { postNewAdmin } from '../../helper/axios.js';
import { toast } from 'react-toastify';


const RegisterPage = () => {
    const [form, setForm] = useState({})

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value

        })
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        const { confirmPassword, ...rest } = form;
        if (confirmPassword !== rest.password) {
            toast.error('password not match !', {
                position: toast.POSITION.BOTTOM_LEFT,
            });
            return
        }
        const { status, message } = await postNewAdmin(rest)
        toast[status](message)


    }

    const inputs = [
        {
            label: "first name",
            type: "text",
            name: "fname",
            placeholder: "sam",
            required: true

        },
        {
            label: "last name",
            type: "text",
            name: "lname",
            placeholder: "smith",
            required: true

        },

        {
            label: "email",
            type: "email",
            name: "email",
            placeholder: "@gmail.com",
            required: true

        },
        {
            label: "number",
            type: "number",
            name: "phoneno",
            placeholder: "sam",
            required: true

        },
        {
            label: "address",
            type: "text",
            name: "address",
            placeholder: "st",
            required: true

        },
        {
            label: "password",
            type: "password",
            name: "password",
            required: true

        },
        {
            label: "confirm password",
            type: "password",
            name: "confirmPassword",
            required: true

        }

    ]
    return (
        <div>
            <Header />
            <div className='main register-page p-5'>
                <Container className='m-3'>
                    <Form className='border p-4 rounded bg-secondary shadow-lg' onSubmit={handleOnSubmit}>
                        <h3>Sign up new admin</h3>
                        <hr></hr>
                        {inputs.map((item, i) =>
                            <CustomInput key={i} {...item} onChange={handleOnChange} />
                        )}
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>


                </Container>


            </div>
            <Footer />
        </div>
    )
}

export default RegisterPage