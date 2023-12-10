import "./CarouselSection.scss";
import Carousel from "react-multi-carousel";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselSection = (props) => {
  const { product, selectedProducts } = props;
  const { name, price, imageUrl } = product;

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="recommended-product">
      <div className="recommended-product-header">
        <h1>Dodaj co lubisz</h1>
      </div>
      <Carousel responsive={responsive} infinite={true}>
        <div className="our-product">
          <img src={imageUrl} alt="product" />
          <p> {name} </p>
          <p> {price} </p>
          <div className="our-product-add">
            <button className="recommended-product-remove">
              <FaMinus />
            </button>
            <strong>{selectedProducts.length}</strong>
            <button className="recommended-product-add">
              <FaPlus />
            </button>
          </div>
        </div>
        <div className="our-product">
          <img src={imageUrl} alt="product" />
          <div> {name} </div>
          <div> {price} </div>
          <div className="our-product-add">
            <button className="recommended-product-remove">
              <FaMinus />
            </button>
            <strong>{selectedProducts.length}</strong>
            <button className="recommended-product-add">
              <FaPlus />
            </button>
          </div>
        </div>
        <div className="our-product">
          <img src={imageUrl} alt="product" />
          <p> {name} </p>
          <p> {price} </p>
          <div className="our-product-add">
            <button className="recommended-product-remove">
              <FaMinus />
            </button>
            <strong>{selectedProducts.length}</strong>
            <button className="recommend-product-add">
              <FaPlus />
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselSection;
