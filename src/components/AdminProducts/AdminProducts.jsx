import { useContext, useState } from 'react';
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
        <div className='py-12 bg-gray-100'>
            {/*--------------- Products List Header------------ */}
            <div className="mx-4 mb-8 lg:mx-8 flex justify-between">
                <div className='space-y-2'>
                    <h1 className='text-3xl font-bold space-y-6'>Total Products : {products.length}</h1>
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
            <div className='mx-4 bg-white lg:mx-8'>
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
                <div className="py-8 flex justify-center">
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
