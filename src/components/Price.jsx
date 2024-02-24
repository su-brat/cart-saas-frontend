import React from "react";

const Price = ({ products, setPrice }) => {
  const totalPrice = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0,
  );
  return (
    <div className="flex flex-col  top-0 right-0 py-10 px-16">
      <h2 className="font-semibold dark:text-white text-slate-900">
        TOTAL PRICE
      </h2>
      <p className="dark:text-white text-slate-900 font-semibold">
        ${totalPrice.toFixed(2)}
      </p>
    </div>
  );
};

export default Price;
