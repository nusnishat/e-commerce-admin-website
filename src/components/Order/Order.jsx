

const Order = ({ order }) => {
    const { image, orderCode, paymentMethod, totalPrice, address, customerNumber} = order;
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <img src={image}  className="h-10 w-10 rounded-full" />
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{orderCode}</td>
            <td className="px-6 py-4 whitespace-nowrap">{customerNumber}</td>
            <td className="px-6 py-4 whitespace-nowrap">{address}</td>
            <td className="px-6 py-4 whitespace-nowrap">{totalPrice}</td>
            <td className="px-6 py-4 whitespace-nowrap">{paymentMethod}</td>
        </tr>
    );
};

export default Order;
