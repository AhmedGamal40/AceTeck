import { IoCartSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { increment } from "../../Redux/Slice";

const ProductDetails = ({ images, id, discount, title, description }) => {
  const dispatch = useDispatch();
  return (
    <div className="product-details">
      <img
        src={images[0]?.image}
        alt={id}
        className="w-full h-48 object-cover"
      />
      <div className="details p-4">
        <h2 className="text-lg font-normal mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">{description}</p>
        <div className="flex justify-around">
          {discount && (
            <span className="badge bg-primary-green text-white px-2 py-1 rounded">
              {discount}% off
            </span>
          )}
          <button
            className="quick-view-btn product-btn primary-btn"
            onClick={() => dispatch(increment())}
          >
            Add Cart
            <IoCartSharp size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
