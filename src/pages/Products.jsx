import { useEffect, useState } from "react";
import { getProducts } from "../services/products";

export default function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    async function loadProducts() {

      try {

        const data = await getProducts();

        setProducts(data);

      } catch (error) {

        console.error(error);

      }

    }

    loadProducts();

  }, []);

  return (

    <main
      style={{
        padding: "40px"
      }}
    >

      <h1>Productos</h1>

      <br />

      {

        products.map(product => (

          <div
            key={product.id}
            style={{
              padding: "20px",
              border: "1px solid #DDD",
              borderRadius: "12px",
              marginBottom: "15px"
            }}
          >

            <strong>{product.name}</strong>

            <br />

            SKU: {product.sku}

          </div>

        ))

      }

    </main>

  );

}
