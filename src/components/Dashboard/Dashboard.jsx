import { FaPaperPlane } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, LabelList } from "recharts";

const Dashboard = () => {
    const data = [
        { name: 'Dhaka', value: 50, color: '#FFD708' },
        { name: 'Chittagong', value: 30, color: '#FF6347' },
        { name: 'Rajshai', value: 10, color: '#32CD32' },
        { name: 'Sylhet', value: 20, color: '#1E90FF' },
    ];
    const data1 = [
        { name: 'Dhaka', value: 40, color: '#800080' },
        { name: 'Chittagong', value: 30, color: '#20B2AA' },
        { name: 'Rajshai', value: 20, color: '#FF69B4' },
        { name: 'Sylhet', value: 10, color: '#FF4501' },
    ];

    const barChartData = [
        { name: 'Jan', Orders: 30, Sales: 20000 },
        { name: 'Feb', Orders: 40, Sales: 25000 },
        { name: 'Mar', Orders: 35, Sales: 22000 },
        { name: 'Apr', Orders: 45, Sales: 28000 },
        { name: 'May', Orders: 50, Sales: 30000 },
        { name: 'Jun', Orders: 55, Sales: 32000 },
    ];

    const lineChartData = [
        { name: 'Jan', Earnings: 20000 },
        { name: 'Feb', Earnings: 25000 },
        { name: 'Mar', Earnings: 22000 },
        { name: 'Apr', Earnings: 28000 },
        { name: 'May', Earnings: 30000 },
        { name: 'Jun', Earnings: 32000 },
    ];

    const recentOrders = [
        { id: 1, customer: 'John Doe', product: 'Item A', amount: 120, status: 'Completed' },
        { id: 2, customer: 'Jane Smith', product: 'Item B', amount: 80, status: 'Pending' },
        { id: 3, customer: 'Mike Johnson', product: 'Item C', amount: 150, status: 'Completed' },
        { id: 4, customer: 'Emily Brown', product: 'Item D', amount: 200, status: 'Shipped' },
        { id: 5, customer: 'Chris Lee', product: 'Item E', amount: 100, status: 'Pending' },
    ];

    return (
        <div className="py-12 px-8 bg-gray-100">
            {/* --------heading---------- */}
            <div className="mx-4 mb-8 lg:mx-8 flex justify-between">
                <div className='space-y-2'>
                    <h1 className='text-3xl font-bold space-y-6 font-mono'>Dashboard</h1>
                    <p className='text-zinc-700'>Grocery Mart Admin Panel</p>
                </div>
            </div>
            {/* ---------summary cards------------ */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <div className='flex gap-x-4 text-yellow-500 bg-white rounded-md shadow-md p-6'>
                    <div className='text-4xl'>
                        <FaPaperPlane />
                    </div>
                    <div>
                        <h1 className='text-xl'>Earnings</h1>
                        <p className='text-xl'>65000 <span className='text-sm'>This month</span></p>
                    </div>
                </div>
                <div className='flex gap-x-4 text-red-600 bg-white rounded-md shadow-md p-6'>
                    <div className='text-4xl'>
                        <FaCartArrowDown />
                    </div>
                    <div>
                        <h1 className='text-xl'>Orders</h1>
                        <p className='text-xl'>50 <span className='text-sm'>This month</span></p>
                    </div>
                </div>
                <div className='flex gap-x-4 text-green-800 bg-white rounded-md shadow-md p-6'>
                    <div className='text-4xl'>
                        <MdPeopleAlt />
                    </div>
                    <div>
                        <h1 className='text-xl'>New Customers</h1>
                        <p className='text-xl'>10 <span className='text-sm'>This month</span></p>
                    </div>
                </div>
                <div className='flex gap-x-4 text-blue-800 bg-white rounded-md shadow-md p-6'>
                    <div className='text-4xl'>
                        <AiFillProduct />
                    </div>
                    <div>
                        <h1 className='text-xl'>Products</h1>
                        <p className='text-xl'>500 <span className='text-sm'>This month</span></p>
                    </div>
                </div>
            </div>
            {/* ---------pie charts and bar chart----------- */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
                {/* ---------pie chart for orders----------- */}
                <div className='bg-white rounded-md p-6'>
                    <h2 className='text-2xl font-bold my-8 text-center'>Orders By Location</h2>
                    <PieChart width={400} height={400} className="mx-auto">
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>
                {/* ---------pie chart for sales----------- */}
                <div className='bg-white rounded-md p-6'>
                    <h2 className='text-2xl font-bold my-8 text-center'>Sales By Location</h2>
                    <PieChart width={400} height={400} className="mx-auto">
                        <Pie
                            data={data1}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data1.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>
            </div>
            {/* ---------bar chart for orders and sales----------- */}
            <div className='bg-white rounded-md p-6 mt-8'>
                <h2 className='text-2xl font-bold my-8 text-center'>Monthly Overview</h2>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        data={barChartData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Orders" fill="#8884d8" />
                        <Bar dataKey="Sales" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            {/* ---------line chart for earnings----------- */}
            <div className='bg-white rounded-md p-6 mt-8'>
                <h2 className='text-2xl font-bold my-8 text-center'>Earnings Trend</h2>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart
                        data={lineChartData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Earnings" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            {/* ---------upcoming events section----------- */}
            <div className='bg-white rounded-md p-6 mt-8'>
                <h2 className='text-2xl font-bold my-8 text-center'>Upcoming Events</h2>
                <div className='flex space-x-4'>
                    <div className='bg-yellow-100 p-4 rounded-md'>
                        <p className='text-sm font-medium text-yellow-800'>Event #1: Webinar on E-commerce Trends</p>
                        <p className='text-xs text-gray-500'>Tomorrow, 10:00 AM</p>
                    </div>
                    <div className='bg-blue-100 p-4 rounded-md'>
                        <p className='text-sm font-medium text-blue-800'>Event #2: Product Launch - New Features</p>
                        <p className='text-xs text-gray-500'>Next Week, 3:00 PM</p>
                    </div>
                </div>
            </div>
            {/* ---------recent orders table----------- */}
            <div className='bg-white rounded-md p-6 mt-8'>
                <h2 className='text-2xl font-bold my-8 text-center'>Recent Orders</h2>
                <div className='overflow-x-auto'>
                    <table className='min-w-full divide-y divide-gray-200'>
                        <thead className='bg-gray-50'>
                            <tr>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>ID</th>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Customer</th>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Product</th>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Amount</th>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Status</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white divide-y divide-gray-200'>
                            {recentOrders.map(order => (
                                <tr key={order.id}>
                                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{order.id}</td>
                                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{order.customer}</td>
                                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{order.product}</td>
                                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{order.amount}</td>
                                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{order.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
