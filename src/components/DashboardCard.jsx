export default function DashboardCard({
  title,
  value,
  color = "#184C3A"
}) {

  return (

    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "18px",
        padding: "25px",
        boxShadow: "0 8px 25px rgba(0,0,0,.06)",
        borderTop: `5px solid ${color}`,
        minWidth: "220px"
      }}
    >

      <h3
        style={{
          color: "#666",
          fontSize: "16px",
          marginBottom: "12px"
        }}
      >
        {title}
      </h3>

      <h1
        style={{
          color,
          fontSize: "42px"
        }}
      >
        {value}
      </h1>

    </div>

  );

}
