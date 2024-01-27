const Product = ({
  title,
  variant,
  quantity,
  price,
  imgsrc,
  setQuantity,
  maxQuantity,
  minQuantity = 0,
}) => {
  return (
    <div className="flex justify-center w-full p-1 max-w-screen-lg">
      <div className="m-1 p-1 w-3/12 h-full self-center">
        <img src={imgsrc} alt="Image not found" />
      </div>
      <div className="m-1 p-1 w-6/12">
        <div className="block m-1">{title}</div>
        <div className="block text-sm m-1">{variant}</div>
        <div className="block text-sm m-1">
          <button
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity === minQuantity}
          >
            -
          </button>
          <span className="m-2">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            disabled={quantity === maxQuantity}
          >
            +
          </button>
        </div>
      </div>
      <div className="m-1 p-1">
        <div className="block m-1">Price</div>
        <div className="block text-sm m-1">{price}</div>
        <div className="block text-sm m-1">x {quantity}</div>
      </div>
    </div>
  );
};

export default Product;
