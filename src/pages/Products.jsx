import { useEffect, useState } from "react";

import PageContainer from "../components/layout/PageContainer";
import ProductsHeader from "../components/products/ProductsHeader";
import ProductCard from "../components/products/ProductCard";

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

    <PageContainer>

      <ProductsHeader />

      {

        products.length === 0

          ? (

            <p>

              No hay productos registrados.

            </p>

          )

          : (

            products.map(product => (

              <ProductCard

                key={product.id}

                product={product}

              />

            ))

          )

      }

    </PageContainer>

  );

}
