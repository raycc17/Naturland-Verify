import DashboardCard from "../components/DashboardCard";

export default function Admin() {

  return (

    <main
      style={{
        minHeight: "100vh",
        background: "#F6F5F1",
        padding: "50px"
      }}
    >

      <h1
        style={{
          color: "#184C3A",
          fontSize: "42px",
          marginBottom: "10px"
        }}
      >
        🌿 Naturland Hub
      </h1>

      <p
        style={{
          color: "#666",
          marginBottom: "40px"
        }}
      >
        Centro de Operaciones
      </p>

      <div
        style={{
          display: "flex",
          gap: "25px",
          flexWrap: "wrap"
        }}
      >

        <DashboardCard
          title="Productos"
          value="1"
        />

        <DashboardCard
          title="Lotes"
          value="1"
          color="#A97735"
        />

        <DashboardCard
          title="Códigos"
          value="1000"
          color="#0B7C66"
        />

        <DashboardCard
          title="Verificaciones"
          value="0"
          color="#0C5E9E"
        />

        <DashboardCard
          title="Alertas"
          value="0"
          color="#C0392B"
        />

      </div>

    </main>

  );

}
