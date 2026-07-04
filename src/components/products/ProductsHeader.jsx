import Button from "../ui/Button";
import Title from "../ui/Title";

export default function ProductsHeader() {
  return (
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

      <Button>
        + Nuevo Producto
      </Button>
    </div>
  );
}
