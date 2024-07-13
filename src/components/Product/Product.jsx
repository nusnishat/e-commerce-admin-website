import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const Products = ({product}) => {
    const {title, imagePath, price, description} = product;
    return (
        <div>
            <div className="card card-compact bg-base-100 md:h-80 py-6 px-4 rounded-md shadow-xl">
                <figure>
                    <img className='w-1/2 mx-auto' src={imagePath} />
                </figure>
                <div className="card-body text-center space-y-2">
                    <h2 className="card-title mt-2 font-semibold text-orange">{title}</h2>
                    <p><span className='font-semibold me-2'>Category:</span>{description}</p>
                    <p><FaBangladeshiTakaSign className="inline font-semibold me-2" />{price}</p>
                    <div className="card-actions justify-end">
                    <FaStar className="inline me-2 text-yellow-500 text-xl" /><FaStar className="inline me-2 text-yellow-500 text-xl" /><FaStar className="inline me-2 text-yellow-500 text-xl" /> <CiStar className="inline me-2 text-yellow-500 text-xl" /> <CiStar className="inline me-2 text-yellow-500 text-xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;