import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>🌿 Naturland Hub</h1>
      <p>Sistema de autenticación de Naturland Wellness.</p>
    </div>
  );
}

function Verify() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Verificar producto</h1>
      <p>Aquí los clientes podrán ingresar su código.</p>
    </div>
  );
}

function Admin() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Centro de Operaciones</h1>
      <p>Panel administrativo de Naturland.</p>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}
