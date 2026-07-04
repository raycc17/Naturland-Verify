export default function Modal({ open, title, children, onClose }) {

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.45)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999
      }}
    >
      <div
        style={{
          width: "520px",
          background: "#fff",
          borderRadius: "18px",
          padding: "35px",
          boxShadow: "0 20px 60px rgba(0,0,0,.25)"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "25px"
          }}
        >
          <h2
            style={{
              margin: 0
            }}
          >
            {title}
          </h2>

          <button
            onClick={onClose}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              fontSize: "24px"
            }}
          >
            ✕
          </button>
        </div>

        {children}

      </div>
    </div>
  );

}
