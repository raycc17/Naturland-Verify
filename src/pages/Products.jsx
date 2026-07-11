import { useEffect, useState } from "react";

import PageContainer from "../components/layout/PageContainer";
import ProductsHeader from "../components/products/ProductsHeader";
import ProductCard from "../components/products/ProductCard";
import ProductForm from "../components/products/ProductForm";
import Modal from "../components/ui/Modal";

import { getProducts, createProduct } from "../services/products";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);

  async function loadProducts() {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  async function handleSaveProduct(product) {
  try {
    await createProduct(product);

    await loadProducts();

    setOpen(false);

  } catch (error) {
    console.error(error);
    alert("No se pudo guardar el producto.");
  }
}

  
  return (
    <PageContainer>

      <ProductsHeader
        onNewProduct={() => setOpen(true)}
      />

      {products.length === 0 ? (
        <p>No hay productos registrados.</p>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))
      )}

      <Modal
        open={open}
        title="Registrar nuevo producto"
        onClose={() => setOpen(false)}
      >
        <ProductForm />
      </Modal>

    </PageContainer>
  );
}
