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

<div
  style={{
    display: "flex",
    gap: "12px",
    alignItems: "center"
  }}
>

  <button
    style={{
      width: "42px",
      height: "42px",
      borderRadius: "50%",
      border: "none",
      background: "#ECE6D3",
      cursor: "pointer",
      fontSize: "18px"
    }}
  >
    ✏️
  </button>

  <button
    style={{
      width: "42px",
      height: "42px",
      borderRadius: "50%",
      border: "none",
      background: "#ECE6D3",
      cursor: "pointer",
      fontSize: "18px"
    }}
  >
    👁️
  </button>

</div>

      </div>

    </div>

  );

}
