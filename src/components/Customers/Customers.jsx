import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import AddCustomerModal from '../AddCustomerModal/AddCustomerModal';
import { MdAdd } from "react-icons/md";
import Customer from '../Customer/Customer';


const Customers = () => {
    const { customers } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8); // Number of items per page

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    //  calculation of customers to display on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCustomers = customers.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='mb-20'>
            {/*--------------- Customers List Header------------ */}
            <div className="mx-4 mb-8 lg:mx-8 flex justify-between">
                <div className='space-y-2'>
                    <h1 className='text-3xl font-bold'> Total Customers: {customers.length}</h1>
                    <p className='text-zinc-700'>Grocery Mart Admin Panel</p>
                </div>
                {/* -------------------add Customers button --------------- */}
                <div className="">
                    <button
                        className="bg-orange text-white px-4 py-2 rounded-md"
                        onClick={toggleModal}
                    >
                        <MdAdd className='inline me-2 text-white font-bold text-2xl' />Add Customer
                    </button>

                    {isModalOpen && <AddCustomerModal toggleModal={toggleModal} />}
                </div>
            </div>
            {/* -----------table starts---------------------- */}
            <div className='mx-4 bg-white lg:mx-8'>
                <div className="overflow-x-auto mt-12">
                    <table className="min-w-full bg-white border-collapse rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Image</th>
                                <th className="py-3 px-6 text-left">First Name</th>
                                <th className="py-3 px-6 text-left">Last Name</th>
                                <th className="py-3 px-6 text-left">Email</th>
                                <th className="py-3 px-6 text-left">Phone Number</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {currentCustomers.map(customer => (
                                <Customer key={customer.id} customer={customer} />
                            ))}
                        </tbody>
                    </table>
                </div>
                {/*--------------- Pagination Buttons----------------- */}
                <div className="mt-4 flex justify-center">
                    {[...Array(Math.ceil(customers.length / itemsPerPage))].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => paginate(index + 1)}
                            className={`mx-1 px-4 py-1 bg-gray-200 rounded-md ${currentPage === index + 1 ? 'bg-gray-400' : ''}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
                {/* -----------table ends---------------------- */}
            </div>
        </div>
    );
};

export default Customers;
