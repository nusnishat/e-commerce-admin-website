

const Customer = ({ customer }) => {
    const {  firstName, lastName, email, phone, image} = customer;
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <img src={image}  className="h-10 w-10 rounded-full" />
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{firstName}</td>
            <td className="px-6 py-4 whitespace-nowrap">{lastName}</td>
            <td className="px-6 py-4 whitespace-nowrap">{email}</td>
            <td className="px-6 py-4 whitespace-nowrap">{phone}</td>
        </tr>
    );
};

export default Customer;
