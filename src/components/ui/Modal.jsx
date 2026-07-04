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
          width: "700px",
          maxWidth: "100%",
          borderRadius: "30px",
          padding: "50px",
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
            fontSize: "54px",
            marginBottom: "8px",
          }}
        >
          🌿
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

        {/* Detalle dorado */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            marginTop: "18px",
            marginBottom: "45px",
          }}
        >
          <div
            style={{
              width: "55px",
              height: "2px",
              background: "#B88430",
            }}
          />

          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#B88430",
            }}
          />

          <div
            style={{
              width: "55px",
              height: "2px",
              background: "#B88430",
            }}
          />
        </div>

        {children}
      </div>
    </div>
  );
}
