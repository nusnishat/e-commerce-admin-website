import React from 'react';

const AdminProduct = ({ product }) => {
    const { title, imagePath, price, stock, category, quantity } = product;
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <img src={imagePath} alt={title} className="h-10 w-10 rounded-full" />
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{title}</td>
            <td className="px-6 py-4 whitespace-nowrap">{price}</td>
            <td className="px-6 py-4 whitespace-nowrap">{quantity}</td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span
                    className={
                        stock === 'in'
                            ? 'px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'
                            : 'px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800'
                    }
                >
                    {stock}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{category}</td>
        </tr>
    );
};

export default AdminProduct;
