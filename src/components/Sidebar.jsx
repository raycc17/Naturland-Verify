import { Link } from "react-router-dom";

export default function Sidebar() {

  const menu = [
    "Dashboard",
    "Productos",
    "Lotes",
    "Códigos",
    "Verificaciones",
    "Clientes",
    "Reportes",
    "Configuración"
  ];

  return (

    <aside
      style={{
        width: "270px",
        background: "#184C3A",
        color: "#fff",
        minHeight: "100vh",
        padding: "35px"
      }}
    >

      <h2
        style={{
          marginBottom: "45px"
        }}
      >
        🌿 Naturland Hub
      </h2>

      {

        menu.map(item => (

          <div
            key={item}
            style={{
              marginBottom: "22px",
              cursor: "pointer",
              opacity: .9,
              transition: ".2s"
            }}
          >

            {item}

          </div>

        ))

      }

    </aside>

  );

}
