import  { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';


const AddProductModal = ({ toggleModal }) => {

    const {products, setProducts} = useContext(AuthContext);

    const handleAddProduct = e =>{
        e.preventDefault();
        const _id = products.length + 1;
        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const imagePath = form.imagePath.value;
        const stock = form.stock.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const addedProduct = {_id, title, category, quantity, price, stock, imagePath}
        
        // add the product to the rest of the products
        const newProducts = [...products, addedProduct];
        setProducts(newProducts);
        
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
                <form onSubmit={handleAddProduct} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Product Title</label>
                        <input
                            name="title"
                            type="text"  required 
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter product title"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Product Price</label>
                        <input
                            name="price" 
                            type="number" required
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter product price"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Stock</label>
                        <input
                            type="text"  required 
                            name="stock"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter in or out"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Product Category</label>
                        <input
                            type="text"  required 
                            name="category"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter product caegory"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Product Picture</label>
                        <input
                            type="text"  required 
                            name="imagePath"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter image url"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Quantity</label>
                        <input
                            type="text"  required 
                            name="quantity"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="EX- 1 ltr/ 100gm"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-orange text-white px-4 py-2 rounded-md"
                        >
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProductModal;
