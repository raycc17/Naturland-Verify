import { useState } from "react";

import Button from "../ui/Button";
import Title from "../ui/Title";

import Modal from "../ui/Modal";
import ProductForm from "./ProductForm";

export default function ProductsHeader() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "35px"
        }}
      >
        <Title marginBottom="0">
          Productos
        </Title>

        <Button onClick={() => setOpen(true)}>
          + Nuevo Producto
        </Button>
      </div>

      <Modal
        open={open}
        title="Registrar nuevo producto"
        onClose={() => setOpen(false)}
      >
        <ProductForm />
      </Modal>
    </>
  );
}
