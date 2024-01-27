import { useState } from "react";
import Product from "./Product";

const initialState = [
  {
    id: 1,
    title: "Product 1",
    variant: "Variant 1",
    quantity: 1,
    price: 1000,
    imgsrc:
      "https://images.unsplash.com/photo-1519141266120-200000000000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 2,
    title: "Product 2",
    variant: "Variant 2",
    quantity: 1,
    price: 2000,
    imgsrc:
      "https://images.unsplash.com/photo-1519141266120-200000000000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 3,
    title: "Product 3",
    variant: "Variant 3",
    quantity: 1,
    price: 3000,
    imgsrc:
      "https://cdn.shopify.com/s/files/1/0070/7032/files/universal_20product_20code.png?v=1697911576",
  },
];

function ProductScroll() {
  const [products, setProducts] = useState(initialState);
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
  return (
    <div className="justify-center items-center flex flex-col">
      {products.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          variant={product.variant}
          quantity={product.quantity}
          price={product.price}
          imgsrc={product.imgsrc}
          setQuantity={(quantity) => updateQuantity(product.id, quantity)}
        />
      ))}
    </div>
  );
}

export default ProductScroll;
