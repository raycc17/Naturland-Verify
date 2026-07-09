import { useState } from "react";

export default function ProductForm() {

  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [description, setDescription] = useState("");

function handleSubmit(e) {
  e.preventDefault();

  alert("El formulario sí está funcionando");

  console.log({
    name,
    sku,
    description,
  });
}

  return (

    <form
      onSubmit={handleSubmit}
      style={{
        display:"flex",
        flexDirection:"column",
        gap:"22px"
      }}
    >

      <div>

        <label
          style={{
            color:"#ECE6D3",
            marginBottom:"8px",
            display:"block"
          }}
        >

          Nombre

        </label>

        <input

          value={name}

          onChange={(e)=>setName(e.target.value)}

          placeholder="Ej. Aguaje Amazonía Mujer"

          style={{

            width:"100%",

            padding:"16px 20px",

            borderRadius:"18px",

            border:"1px solid rgba(236,230,211,.35)",

            background:"rgba(255,255,255,.08)",

            color:"#ECE6D3",

            outline:"none"

          }}

        />

      </div>

      <div>

        <label
          style={{
            color:"#ECE6D3",
            marginBottom:"8px",
            display:"block"
          }}
        >

          SKU

        </label>

        <input

          value={sku}

          onChange={(e)=>setSku(e.target.value)}

          placeholder="Ej. AAM001"

          style={{

            width:"100%",

            padding:"16px 20px",

            borderRadius:"18px",

            border:"1px solid rgba(236,230,211,.35)",

            background:"rgba(255,255,255,.08)",

            color:"#ECE6D3",

            outline:"none"

          }}

        />

      </div>

      <div>

        <label
          style={{
            color:"#ECE6D3",
            marginBottom:"8px",
            display:"block"
          }}
        >

          Descripción

        </label>

        <textarea

          rows="5"

          value={description}

          onChange={(e)=>setDescription(e.target.value)}

          placeholder="Describe el producto..."

          style={{

            width:"100%",

            padding:"18px",

            borderRadius:"18px",

            border:"1px solid rgba(236,230,211,.35)",

            background:"rgba(255,255,255,.08)",

            color:"#ECE6D3",

            resize:"none",

            outline:"none"

          }}

        />

      </div>

      <div
        style={{
          display:"flex",
          justifyContent:"flex-end",
          gap:"15px"
        }}
      >

        <button
          type="button"
          style={{
            background:"transparent",
            color:"#ECE6D3",
            border:"none"
          }}
        >

          Cancelar

        </button>

        <button
          type="submit"
          style={{

            background:"#B88430",

            color:"#fff",

            border:"none",

            borderRadius:"18px",

            padding:"14px 26px"

          }}
        >

          Guardar producto

        </button>

      </div>

    </form>

  );

}
