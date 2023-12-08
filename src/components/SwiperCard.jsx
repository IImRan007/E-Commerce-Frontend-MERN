import { useContext, useEffect, useState } from "react";
import { getAllProducts } from "../context/product/ProducActions";
import { UserContext } from "../context/user/UserContext";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCreative,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperCard = () => {
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
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectCreative]}
        className="mySwiper mt-4"
      >
        {products &&
          products?.map((product) => (
            <SwiperSlide key={product._id}>
              <Link to={`/product/${product._id}`}>
                <div className="swiperSlideDiv">
                  <img
                    className="swiperSlideDiv object-cover"
                    src={product.productImage.secure_url}
                    alt="Products"
                  />
                  <p className="swiperSlideText">{product.title}</p>
                  <p className="swiperSlidePrice">₹{product.price}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default SwiperCard;
