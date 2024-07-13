import  { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';


const AddProductModal = ({ toggleModal }) => {

    const {customers, setCustomers} = useContext(AuthContext);

    const handleAddCustomer = e =>{
        e.preventDefault();
        const id = customers.length + 1;
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const image = form.image.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const addedCustomer = {id, firstName, lastName, email, phone, image}
        console.log(addedCustomer)
        console.log('submitted')
        
        // add the product to the rest of the customers
        const newcustomers = [...customers, addedCustomer];
        setCustomers(newcustomers);

        // close modal
        toggleModal();

        alert("Added Successfully!!");
    }


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-lg p-6 relative overflow-y-auto">
                <button
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                    onClick={toggleModal}
                >
                    &times;
                </button>
                <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
                {/* ---------------adding form------------- */}
                <form onSubmit={handleAddCustomer} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">First Name</label>
                        <input
                            name="firstName"
                            type="text"  required
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter First Name"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Last Name</label>
                        <input
                            name="lastName" required
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter Last Name"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"  required
                            name="email"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter Email"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Phone Number</label>
                        <input
                            type="number"  required
                            name="phone"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter Phone Number"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Image Url</label>
                        <input
                            type="text"  required
                            name="image"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter image url"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-orange text-white px-4 py-2 rounded-md"
                        >
                            Add Customer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProductModal;
