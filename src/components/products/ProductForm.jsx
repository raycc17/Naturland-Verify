export default function ProductForm() {

  return (

    <form>

      <label>

        Nombre

      </label>

      <input
        type="text"
        placeholder="Ej. Aguaje Amazonía Mujer"
      />

      <br /><br />

      <label>

        SKU

      </label>

      <input
        type="text"
        placeholder="Ej. AAM001"
      />

      <br /><br />

      <label>

        Descripción

      </label>

      <textarea
        rows="5"
      />

      <br /><br />

      <button>

        Guardar

      </button>

    </form>

  );

}
