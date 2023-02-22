import React from 'react'
import { Container, Row, Col, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const AdminLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <main className='main'>

                <Container fluid>
                    <Row>
                        <Col xs="3" className='side-bar bg-dark text-light'>
                            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-success' />
                                <Navbar.Collapse id="basic-navbar-nav"> */}


                            <div className="mt-5">
                                <div className="text-center fw-bolder"> admin menu</div>
                                <hr></hr>
                                <div className="side-bar">
                                    <ul>
                                        <li>
                                            <Link to="/dashboard" className='nav-link'> <i class="fa-solid fa-person"></i>dashboard</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard" className='nav-link'> <i class="fa-solid fa-gauge"></i>catalogue</Link>
                                        </li>


                                        <li>
                                            <Link to="/dashboard" className='nav-link'> <i class="fa-light fa-gauge"></i>orders</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard" className='nav-link'> <i class="fa-solid fa-people"></i>customer</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard" className='nav-link'> <i class="fa-light fa-gear"></i>setting</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard" className='nav-link'> <i class="fa-light fa-gauge"></i>dashboard</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* </Navbar.Collapse> */}
                        </Col>


                        {/* main page  */}
                        <Col>
                            <div className='main dashboard-page'>
                                welcome to ddashboard
                                {children}
                            </div>
                        </Col>
                    </Row>
                </Container>

            </main>


            <Footer />
        </div >
    )
}

export default AdminLayout