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
    <div className="flex self-center justify-center w-full p-1">
      <div className="flex flex-col m-1 p-1 w-3/12 h-28 justify-center">
        <img
          className="max-h-28 self-center"
          src={imgsrc}
          alt="Image not found"
        />
      </div>
      <div className="m-1 p-1 w-6/12">
        <div className="block m-1">{title}</div>
        <div className="block text-sm m-1">{variant}</div>
        <div className="flex text-sm m-1">
          <button
            className="rounded-none"
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity === minQuantity}
          >
            -
          </button>
          <div className="self-center m-1 min-w-6 text-center">{quantity}</div>
          <button
            className="rounded-none"
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
