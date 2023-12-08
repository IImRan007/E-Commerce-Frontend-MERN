import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user/UserContext";
import { getAllProducts } from "../context/product/ProducActions";

const Productcard = () => {
  const [products, setProducts] = useState(null);

  const { userState } = useContext(UserContext);

  const getProducts = async () => {
    const response = await getAllProducts(userState?.user?.token);

    console.log(response);
    if (response?.success) {
      setProducts(response.products);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div>
        <h1>Products</h1>
      </div>
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {products &&
          products?.map((product) => (
            <div
              key={product._id}
              className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
            >
              <img
                src={product.productImage.secure_url}
                alt="Products"
                className="z-0 h-full w-full rounded-md object-cover"
              />
              <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">
                  {product.title}
                </h1>
                <p className="mt-2 text-sm text-gray-300">
                  {product.description}
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                  Shop Now &rarr;
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Productcard;
