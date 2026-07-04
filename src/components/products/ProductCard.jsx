import theme from "../../styles/theme";

export default function ProductCard({ product }) {

  return (

    <div
      style={{
        background: theme.colors.white,
        borderRadius: theme.radius,
        padding: theme.spacing.md,
        boxShadow: theme.shadows.card,
        marginBottom: theme.spacing.md,
        border: `1px solid ${theme.colors.border}`
      }}
    >

      <h3
        style={{
          margin: 0,
          color: theme.colors.primary,
          fontFamily: theme.typography.fontFamily,
          fontWeight: theme.typography.medium
        }}
      >
        {product.name}
      </h3>

      <p>
        <strong>SKU:</strong> {product.sku}
      </p>

      <p>

        <strong>Estado:</strong>{" "}

        {product.active ? "💚 Activo" : "❤️ Inactivo"}

      </p>

    </div>

  );

}
