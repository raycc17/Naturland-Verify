import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardCard from "../components/DashboardCard";

export default function Admin() {

  return (

    <div
      style={{
        display:"flex",
        background:"#F6F5F1"
      }}
    >

      <Sidebar/>

      <main
        style={{
          flex:1,
          padding:"40px"
        }}
      >

        <Topbar/>

        <div
          style={{
            display:"flex",
            gap:"25px",
            flexWrap:"wrap"
          }}
        >

          <DashboardCard
            title="Productos"
            value="1"
          />

          <DashboardCard
            title="Lotes"
            value="1"
            color="#B88430"
          />

          <DashboardCard
            title="Códigos"
            value="1000"
            color="#007B5E"
          />

          <DashboardCard
            title="Verificaciones"
            value="0"
            color="#2C6BED"
          />

          <DashboardCard
            title="Alertas"
            value="0"
            color="#C53A2F"
          />

        </div>

      </main>

    </div>

  );

}
