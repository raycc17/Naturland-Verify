import { useEffect, useState } from "react";

import { getProducts } from "../services/products";

import PageContainer from "../components/layout/PageContainer";

import Title from "../components/ui/Title";

import ProductCard from "../components/products/ProductCard";

export default function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    async function load() {

      const data = await getProducts();

      setProducts(data);

    }

    load();

  }, []);

  return (

    <PageContainer>

      <Title>

        Productos

      </Title>

      {

        products.map(product => (

          <ProductCard

            key={product.id}

            product={product}

          />

        ))

      }

    </PageContainer>

  );

}
