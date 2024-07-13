import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import AdminProduct from '../AdminProduct/AdminProduct';
import AddProductModal from '../AddProductModal/AddProductModal';
import { MdAdd } from "react-icons/md";

const AdminProducts = () => {
    const { products } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8); // Number of items per page

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    // Logic to calculate which products to display on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='mb-20'>
            {/* -------------heading--------------- */}
            <div className="bg-gradient-to-r from-black to-zinc-900 opacity-75 text-white py-6 px-4 mb-10">
                <h1 className="text-4xl font-bold">Welcome to the Grocery Mart Admin Panel</h1>
                <p className="text-lg mt-2">Manage your website efficiently and effortlessly</p>
            </div>

            {/*--------------- Products List Header------------ */}
            <div className="mb-8 lg:mx-8 flex justify-between">
                <div>
                    <h1 className='text-3xl font-bold'>Products List</h1>
                    <p className='text-zinc-700'>Grocery Mart Admin Panel</p>
                </div>
                {/* -------------------add product button start--------------- */}
                <div className="">
                    <button
                        className="bg-orange text-white px-4 py-2 rounded-md"
                        onClick={toggleModal}
                    >
                        <MdAdd className='inline me-2 text-white font-bold text-2xl' />Add Product
                    </button>

                    {isModalOpen && <AddProductModal toggleModal={toggleModal} />}
                </div>
            </div>
            {/* -----------table starts---------------------- */}
            <div className='bg-white lg:mx-8'>
                <div className="overflow-x-auto mt-12">
                    <table className="min-w-full bg-white border-collapse rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Image</th>
                                <th className="py-3 px-6 text-left">Name</th>
                                <th className="py-3 px-6 text-left">Price</th>
                                <th className="py-3 px-6 text-left">Quantity</th>
                                <th className="py-3 px-6 text-left">Stock</th>
                                <th className="py-3 px-6 text-left">Department</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {currentProducts.map(product => (
                                <AdminProduct key={product._id} product={product} />
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* ----------Pagination Buttons---------------- */}
                <div className="mt-4 flex justify-center">
                    {[...Array(Math.ceil(products.length / itemsPerPage))].map((_, index) => (
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

export default AdminProducts;
