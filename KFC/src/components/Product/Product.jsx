import "./Product.scss";
import { useState } from "react";
import ProductModal from "../ProductModal/ProductModal";

const Product = (props) => {
  const { product, onProductSelect, orderedProducts, onSubmitButton } = props;
  const { name, price, description, imageUrl } = product;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isOrdered = orderedProducts.some(
    (orderedProduct) => orderedProduct.id === product.id
  );

  const orderedCount = orderedProducts.filter(
    (orderedProduct) => orderedProduct.id === product.id
  ).length;

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeButton = () => {
    setIsModalOpen(false);
  };

  return (
    <article className="product" data-ordered={isOrdered}>
      <div>
        <img src={imageUrl} alt={name} />
      </div>
      <div>
        <header>
          <h4>{name}</h4>
          <p>{description}</p>
        </header>
        <section>
          <strong>{price}</strong>
          <button type="button" onClick={handleButtonClick}>
            {isOrdered ? orderedCount : "+"}
          </button>
          {isModalOpen && (
            <ProductModal
              onOpen={isModalOpen}
              onClose={closeButton}
              product={product}
              onSubmitButton={onSubmitButton}
            ></ProductModal>
          )}
        </section>
      </div>
    </article>
  );
};

export default Product;
