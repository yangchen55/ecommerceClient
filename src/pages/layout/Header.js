import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Navigate, NavigationType, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { requestSuccess } from '../login/authSlice';



const Header = () => {
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.user)
    const handleOnLogout = (arg) => {
        dispatch(requestSuccess({}));



    }
    return (
        <Navbar bg="warning" expand="md">
            <Container>
                <Link to="/" className='navbar-brand'>Feminal clothing</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {user?._id ? (
                            <>

                                <Link to="/" className='nav-link'><i class="fa-solid fa-bell"></i></Link>
                                <Link to="/" className='nav-link'> <i class="fa-solid fa-right-to-bracket" onClick={handleOnLogout}></i></Link>
                                <Link to="/register" className='nav-link'> <i class="fa-solid fa-user-plus"></i></Link>
                            </>
                        ) : (
                            <>
                                <Link to="/" className='nav-link'><i class="fa-solid fa-right-to-bracket"></i>login</Link>
                                <Link to="/register" className='nav-link'> <i class="fa-solid fa-user-plus"></i>signUp</Link>
                            </>
                        )



                        }





                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Header