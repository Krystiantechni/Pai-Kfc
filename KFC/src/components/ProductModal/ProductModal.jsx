import { useState } from "react";
import "./ProductModal.scss";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import CarouselSection from "../CarouselSection/CarouselSection";
import { motion } from "framer-motion";
import "react-multi-carousel/lib/styles.css";

const ProductModal = (props) => {
  const { product, onClose, onSubmitButton } = props;
  const { name, description, price, imageUrl } = product;
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [active, setActive] = useState(false);

  const handleCloseButtonClick = () => {
    onClose();
  };

  const removeFromSlide = () => {
    const newSelectedProducts = [...selectedProducts];
    newSelectedProducts.splice(newSelectedProducts.indexOf(product), 1);
    setSelectedProducts(newSelectedProducts);
  };

  const addToSlide = () => {
    setSelectedProducts([...selectedProducts, { ...product }]);
  };

  const totalCost = selectedProducts.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div className="product-modal">
      <div className="product-wrapper">
        <nav className="title-bar">
          <button className="close-button" onClick={handleCloseButtonClick}>
            <FaArrowLeftLong />
          </button>
          <h1> {name} </h1>
          <button className="favourite" onClick={() => setActive(!active)}>
            <FaRegHeart color={active ? "red" : "black"} />
          </button>
        </nav>
        <div className="product-info">
          <img src={imageUrl} alt="" />
          <div>
            <header className="product-header">
              <h3>{name}</h3>
              <strong>{price}</strong>
            </header>
            <section className="product-description">
              <span style={{ color: `grey` }}>{description}</span>
            </section>
          </div>
        </div>
        <CarouselSection
          product={product}
          removeFromSlide={removeFromSlide}
          addToSlide={addToSlide}
          selectedProducts={selectedProducts}
        ></CarouselSection>
        <div className="purchase">
          <div className="product-subfields-quantity-container">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 180 }}
              whileTap={{
                scale: 1,
                rotate: -180,
              }}
            >
              <button
                className="product-subfields-quantity-remove"
                onClick={removeFromSlide}
              >
                <FaMinus />
              </button>
            </motion.div>
            <strong> {selectedProducts.length} </strong>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 180 }}
              whileTap={{
                scale: 1,
                rotate: -180,
              }}
            >
              <button
                className="product-subfields-quantity-add"
                onClick={addToSlide}
              >
                <FaPlus />
              </button>
            </motion.div>
          </div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
            <button className="add-to-basket" onClick={onSubmitButton}>
              dodaj do koszyka {totalCost.toFixed(2)}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
