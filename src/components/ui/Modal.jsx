export default function Modal({ open, title, children, onClose }) {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.45)",
        backdropFilter: "blur(6px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
        padding: "30px",
      }}
    >
      <div
        style={{
          width: "595px",
          maxWidth: "100%",
          borderRadius: "30px",
          padding: "42px",
          background:
            "linear-gradient(135deg,#5e8487 0%, #3a2e20 45%, #052b04 100%)",
          boxShadow: "0 30px 80px rgba(0,0,0,.35)",
          border: "1px solid rgba(236,230,211,.20)",
          position: "relative",
        }}
      >
        {/* Botón cerrar */}

        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "28px",
            right: "30px",
            background: "transparent",
            border: "none",
            color: "#ECE6D3",
            fontSize: "42px",
            cursor: "pointer",
            lineHeight: 1,
            transition: ".2s",
          }}
        >
          ×
        </button>

        {/* Logo */}

<div
  style={{
    textAlign: "center",
    marginBottom: "14px",
  }}
>
  <img
    src="/logo50.png"
    alt="Naturland"
    style={{
      width: "58px",
      height: "58px",
      objectFit: "contain",
    }}
  />
</div>

        {/* Título */}

        <h2
          style={{
            color: "#ECE6D3",
            textAlign: "center",
            margin: 0,
            fontWeight: 300,
            fontSize: "52px",
          }}
        >
          {title}
        </h2>

    <div style={{ marginBottom: "28px" }} />

        {children}
      </div>
    </div>
  );
}
