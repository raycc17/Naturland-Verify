export default function ProductForm() {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "22px",
      }}
    >
      {/* Nombre */}
      <div>
        <label
          style={{
            color: "#ece6d3",
            display: "block",
            marginBottom: "10px",
            fontWeight: 300,
          }}
        >
          Nombre
        </label>

        <input
          type="text"
          placeholder="Ej. Aguaje Amazonía Mujer"
          style={{
            width: "100%",
            padding: "16px 22px",
            borderRadius: "18px",
            border: "1px solid rgba(236,230,211,.35)",
            background: "rgba(255,255,255,.08)",
            color: "#ece6d3",
            outline: "none",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* SKU */}
      <div>
        <label
          style={{
            color: "#ece6d3",
            display: "block",
            marginBottom: "10px",
            fontWeight: 300,
          }}
        >
          SKU
        </label>

        <input
          type="text"
          placeholder="Ej. AAM001"
          style={{
            width: "100%",
            padding: "16px 22px",
            borderRadius: "18px",
            border: "1px solid rgba(236,230,211,.35)",
            background: "rgba(255,255,255,.08)",
            color: "#ece6d3",
            outline: "none",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Descripción */}
      <div>
        <label
          style={{
            color: "#ece6d3",
            display: "block",
            marginBottom: "10px",
            fontWeight: 300,
          }}
        >
          Descripción
        </label>

        <textarea
          rows="5"
          placeholder="Describe el producto..."
          style={{
            width: "100%",
            padding: "18px 22px",
            borderRadius: "18px",
            border: "1px solid rgba(236,230,211,.35)",
            background: "rgba(255,255,255,.08)",
            color: "#ece6d3",
            resize: "none",
            outline: "none",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Botones */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "15px",
          marginTop: "10px",
        }}
      >
        <button
          type="button"
          style={{
            background: "transparent",
            border: "none",
            color: "#ece6d3",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Cancelar
        </button>

        <button
          type="submit"
          style={{
            background: "#B88430",
            color: "white",
            border: "none",
            borderRadius: "18px",
            padding: "14px 28px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: 500,
          }}
        >
          Guardar producto
        </button>
      </div>
    </form>
  );
}
