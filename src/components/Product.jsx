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
      <div className="flex flex-col m-1 p-1 w-3/12 h-28 justify-center dark:text-white text-slate-700">
        <img
          className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-fill object-center"
          src={imgsrc}
          alt="Image not found"
        />
      </div>
      <div className="m-1 p-1 w-6/12">
        <div className="block m-1 dark:text-white text-slate-900">{title}</div>
        <div className="block text-sm m-1 dark:text-white text-slate-900">
          {variant}
        </div>
        <div className="flex text-sm m-1 font-semibold">
          <button
            className="rounded-ss=md"
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity === minQuantity}
          >
            -
          </button>
          <div className="self-center m-1 min-w-6 text-center dark:text-white text-slate-900">
            {quantity}
          </div>
          <button
            className="rounded-ss-md"
            onClick={() => setQuantity(quantity + 1)}
            disabled={quantity === maxQuantity}
          >
            +
          </button>
        </div>
      </div>
      <div className="m-1 p-1">
        <div className="block m-1 font-semibold dark:text-white text-slate-900">
          PRICE
        </div>
        <div className="block text-sm m-1 font-semibold dark:text-white text-slate-900">
          {price}
        </div>
        <div className="block text-sm m-1 font-semibold dark:text-white text-slate-900">
          x {quantity}
        </div>
      </div>
    </div>
  );
};

export default Product;
