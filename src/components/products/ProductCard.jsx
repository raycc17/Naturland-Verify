import theme from "../../styles/theme";

export default function ProductCard({ product }) {

  return (

    <div
      style={{
        background: theme.colors.white,
        borderRadius: theme.radius,
        padding: "24px",
        marginBottom: "20px",
        boxShadow: theme.shadows.card,
        border: `1px solid ${theme.colors.border}`
      }}
    >

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >

        <div>

          <h2
            style={{
              color: theme.colors.primary,
              marginBottom: "8px",
              fontWeight: 500
            }}
          >
            {product.name}
          </h2>

          <p>

            SKU: <strong>{product.sku}</strong>

          </p>

          <p>

            {

              product.active

                ? "💚 Activo"

                : "❤️ Inactivo"

            }

          </p>

        </div>

        <button
          style={{
            padding: "12px 20px",
            borderRadius: theme.radius,
            border: "none",
            background: theme.colors.gold,
            color: "#fff",
            cursor: "pointer"
          }}
        >

          Editar

        </button>

      </div>

    </div>

  );

}
