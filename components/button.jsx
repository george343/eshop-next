const Button = ({ id, price, slug, image, name }) => {
  return (
    <button
      className='btn snipcart-add-item'
      data-item-id={id}
      data-item-price={price}
      data-item-url={`products/${slug}`}
      data-item-image={image}
      data-item-name={name}
    >
      Add to cart 🛒
    </button>
  );
};

export default Button;
