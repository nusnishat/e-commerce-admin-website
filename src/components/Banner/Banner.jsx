import backgroundImage from '../../images/header-banner.jpg'
const Banner = () => {
    return (
        <div>
            <div className="relative mb-10 border-b-4 border-orange">
                <div
                    style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
                    className="header bg-gradient-to-r from-black to-zinc-900 text-white py-12 px-4 "
                >
                    <div className="absolute inset-0 bg-black opacity-50 space-y-4"></div>
                    <div className="relative">
                        <h1 className="text-4xl font-bold">Welcome to the Grocery Mart Admin Panel</h1>
                        <p className="text-lg mt-2">Manage your website efficiently and effortlessly</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;