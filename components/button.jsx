const Button = ({ id, price, slug, image, name }) => {
  return (
    <button
      className='snipcart-add-item bg-purple-800 text-white inline-block py-4 px-5 rounded cursor-pointer transition duration-300 border-none hover:bg-purple-900'
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
