import { useState, useRef } from "react";
import Product from "./Product";
import Price from "./Price";

const initialState = [
  {
    id: 1,
    title: "PRODUCT 1",
    variant: "Variant 1",
    quantity: 1,
    price: 1000,
    imgsrc:
      "https://images.unsplash.com/photo-1519141266120-200000000000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 2,
    title: "PRODUCT 2",
    variant: "Variant 2",
    quantity: 1000,
    price: 2000,
    imgsrc: "https://images.meesho.com/images/products/8774222/a64fe_512.webp",
  },
  {
    id: 3,
    title: "PRODUCT 3",
    variant: "Variant 3",
    quantity: 1,
    price: 3000,
    imgsrc:
      "https://cdn.shopify.com/s/files/1/0070/7032/files/universal_20product_20code.png?v=1697911576",
  },
  {
    id: 4,
    title: "PRODUCT 4",
    variant: "Variant 4",
    quantity: 1,
    price: 3000,
    imgsrc: "https://m.media-amazon.com/images/I/81PtF30TLUL._AC_UY1100_.jpg",
  },
  {
    id: 5,
    title: "PRODUCT 5",
    variant: "Variant 5",
    quantity: 1,
    price: 3000,
    imgsrc:
      "https://cdn.shopify.com/s/files/1/0070/7032/files/universal_20product_20code.png?v=1697911576",
  },
];

function ProductScroll() {
  const intervalId = useRef({}); //timeoutID
  const [products, setProducts] = useState(initialState);
  const [totalPrice, setTotalPrice] = useState(0);
  const updateQuantity = (id, quantity) =>
    setProducts((products) =>
      products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: quantity,
          };
        }
        return product;
      }),
    );
  const updatePrice = (price) =>
    setTotalPrice((products) =>
      products.reduce((sum, product) => sum + product.price, 0),
    );
  const setRemovedForSingleProduct = (id, removedFlag) => {
    setProducts((products) =>
      products.map((product) =>
        product.id == id ? { ...product, removed: removedFlag } : product,
      ),
    );
  };
  const removeProduct = (id) => {
    setProducts((products) => products.filter((product) => product.id !== id));
    // TODO: API call to delete the product from order
  };
  const removeProductAndReturnTimeoutId = (id) => {
    setRemovedForSingleProduct(id, true);
    return setTimeout(() => removeProduct(id), 5000);
  };
  const buySingleProduct = (product) => {
    console.log(product); // TODO: Remove this
    // TODO: API call to create a new order with status SUCCESS and current product
  };
  return (
    <div className="justify-center items-center flex flex-col bg-slate-500 dark:bg-gray-800">
      <div className="object-left">
        <Price products={products} setPrice={(price) => updatePrice(price)} />
      </div>
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-slate-300 dark:bg-gray-700 shadow-md shadow-zinc-900 m-1 p-1 w-full flex flex-col self-center justify-center max-w-screen-lg"
        >
          {product.removed ? (
            <button
              className="w-full"
              onClick={() => {
                const id = product.id;
                if (intervalId.current[id])
                  clearTimeout(intervalId.current[id]);
                setRemovedForSingleProduct(id, false);
              }}
            >
              Undo
            </button>
          ) : (
            <>
              <Product
                title={product.title}
                variant={product.variant}
                quantity={product.quantity}
                price={product.price}
                imgsrc={product.imgsrc}
                setQuantity={(quantity) => updateQuantity(product.id, quantity)}
              />
              <div className="m-1 p-1">
                <button
                  className="dark:border-zinc-800 rounded-s-md"
                  onClick={() => {
                    intervalId.current[product.id] =
                      removeProductAndReturnTimeoutId(product.id);
                  }}
                >
                  Remove
                </button>
                <button
                  className="dark:border-zinc-800 rounded-s-md"
                  onClick={() => buySingleProduct(product)}
                >
                  Buy this now
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProductScroll;
