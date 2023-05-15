import React, { useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { AdminLayout } from '../layout/AdminLayout'
import { getCustomerAction } from './CustomerAction.js'

const CustomerPage = () => {
    const dispatch = useDispatch()
    const { customerLists } = useSelector((state) => state.customer)
    console.log(customerLists)


    useEffect(() => {
        dispatch(getCustomerAction())
    }, [dispatch])

    return (
        <AdminLayout>
            <Container className='main-customer'>
                <h2 className='text-center mt-3'>Customers</h2>
                <hr></hr>
                <Table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">phone</th>
                            <th scope="col">email</th>
                            <th scope="col">address</th>
                            <th scope="col">status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customerLists?.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <th scope="row">{item.fName}</th>
                                    <td>{item.lName}</td>
                                    <td>{item.phone}</td>
                                    <td>{item?.email}</td>
                                    <td>{item?.address ? item.address :
                                        " not avaible"
                                    }</td>
                                    <td>{item?.status}</td>
                                </tr>

                            ))
                        }


                    </tbody>
                </Table>


            </Container>
        </AdminLayout>
    )
}

export default CustomerPage