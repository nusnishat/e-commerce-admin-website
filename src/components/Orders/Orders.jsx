import  { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import Order from '../Order/Order'

const Orders = () => {
    const { orders } = useContext(AuthContext); 

    return (
        <div className='py-12 bg-gray-100'>
            {/*--------------- Products List Header------------ */}
            <div className="mx-4 mb-8 lg:mx-8 flex justify-between">
                <div className='space-y-2'>
                    <h1 className='text-3xl font-bold space-y-6'>Total Orders : {orders.length}</h1>
                    <p className='text-zinc-700'>Grocery Mart Admin Panel</p>
                </div>
            </div>
            {/* -----------table starts---------------------- */}
            <div className=' mx-4 bg-white lg:mx-8'>
                <div className="overflow-x-auto mt-12">
                    <table className="min-w-full bg-white border-collapse rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Image</th>
                                <th className="py-3 px-6 text-left">Order Code</th>
                                <th className="py-3 px-6 text-left">Customer Number</th>
                                <th className="py-3 px-6 text-left">Customer Address</th>
                                <th className="py-3 px-6 text-left">Total Amount</th>
                                <th className="py-3 px-6 text-left">Payment Method</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {orders.map(order => (
                                <Order key={order.id} order={order} />
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* -----------table ends---------------------- */}
            </div>
        </div>
    );
};

export default Orders;
