import Button from "../ui/Button";
import Title from "../ui/Title";

export default function ProductsHeader({ onNewProduct }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "35px",
      }}
    >
      <Title marginBottom="0">
        Productos
      </Title>

      <Button onClick={onNewProduct}>
        + Nuevo Producto
      </Button>
    </div>
  );
}
