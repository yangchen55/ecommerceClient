import React, { useEffect } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AdminLayout } from '../layout/AdminLayout'
import { getOrderListAction } from './OrderAction'
import Accordion from 'react-bootstrap/Accordion';

const OrderPage = () => {
    const dispatch = useDispatch()
    const { orderList } = useSelector((state) => state.order)




    useEffect(() => {
        dispatch(getOrderListAction())
    }, [dispatch])

    return (
        <AdminLayout>
            <h2>Order List </h2>
            <hr></hr>
            {orderList.map((item, index) => (
                <Accordion className='mt-4'>
                    <Accordion.Item eventKey={index}>
                        <Accordion.Header>
                            <Row key={index} >
                                <Col >
                                    <h6> Total  orders: <br></br>  {item?.cart.length}</h6>
                                </Col>


                                <Col>
                                    order Date:  {new Date(item?.createdAt).toLocaleDateString()}
                                </Col>
                                <Col className='text-end'>
                                    <h6> Total Amount: ${item?.paymentDetails.totalAmount}</h6>
                                </Col>


                            </Row>


                        </Accordion.Header>
                        <Accordion.Body>
                            {item?.cart.map((item, index) => (
                                <>
                                    <Link style={{ color: 'black', textDecoration: 'none' }} to={`/product/${item?.slug}`}>
                                        <Row>



                                            <Col className='m-3'>
                                                <img
                                                    src={item?.mainImage && process.env.REACT_APP_DOMAIN + item.mainImage.substr(6)}
                                                    width="80px"
                                                    alt="photos"
                                                />
                                            </Col>
                                            <Col>
                                                {item.price}
                                            </Col>
                                            <Col>
                                                <bold>
                                                    {item?.name}
                                                </bold>
                                            </Col>









                                        </Row>

                                    </Link>
                                </>

                            ))}
                            <div className='d-flex space-between'>
                                <div>
                                    <div>Ordered by: {item?.fName} {item?.lName}</div>
                                    <div>
                                        <label>Delivery Address:</label>
                                        <span>{item?.addressline}</span>
                                    </div>
                                    <div className='d-flex space-around'>
                                        <a href={`tel:${item?.phone}`} className="mx-4"><i class="fa-solid fa-phone"></i></a>
                                        <a href={`mailto:${item?.email}`}><i class="fa-solid fa-envelope"></i></a>
                                    </div>
                                </div>
                            </div>


                        </Accordion.Body>


                    </Accordion.Item>

                </Accordion>
            ))
            }

        </AdminLayout >

    )
}

export default OrderPage