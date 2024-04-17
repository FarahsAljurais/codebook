import { Link } from "react-router-dom";
import product from "../../assets/images/product.avif";

export const ProductCard = () => {
  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to="#" className="relative">
        <span className="absolute top-4 left-20 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
          Best Seller
        </span>
        <img
          className="rounded-lg max-h-full"
          src={product}
          alt="CodeBook Hero Section"
        />
      </Link>
      <div className="p-5">
        <Link to="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Label
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            ullam iusto tempora inventore atque pariatur praesentium quaerat
            quia nihil, rerum non, nobis commodi aliquid earum dolores fuga
            ipsum officiis nisi!
          </p>
        </Link>

        <div className="flex items-center my-2">
          <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
          <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
          <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
          <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
          <i className="text-lg bi bi-star text-yellow-500 mr-1"></i>
        </div>
        <p className="flex justify-between items-center">
          <span className="text-2xl dark:text-gray-200">
            <span>$</span>
            <span>29</span>
          </span>
          <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
            Add To Cart +<i className="ml-1 bi bi-plus-lg"></i>
          </button>
        </p>
      </div>
    </div>
  );
};
