import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Nuevo producto</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Imagen</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Nombre</label>
          <input type="text" placeholder="Nombre del producto" />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="5" />
        </div>
        <div className="addProductItem">
          <label>Estado</label>
          <select name="active" id="active">
            <option value="yes">Disponible</option>
            <option value="no">Agotado</option>
          </select>
        </div>
        <button className="addProductButton">Agregar</button>
      </form>
    </div>
  );
}