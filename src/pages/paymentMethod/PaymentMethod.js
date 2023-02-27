import React from 'react'
import PaymentForm from '../../components/paymentMethod-forms/PaymentForm'
import PayTable from '../../components/paymentMethod-forms/PayTable'
import { AdminLayout } from '../layout/AdminLayout'

const PaymentMethod = () => {
    return (
        <AdminLayout>
            <div className="mt-3">
                <h3>payment method</h3>
                <hr />

            </div>
            <PaymentForm />
            <PayTable />

        </AdminLayout>
    )
}

export default PaymentMethod





