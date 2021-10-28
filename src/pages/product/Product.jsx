import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Producto</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Agregar</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Comportamiento de las ventas"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-purple-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1566960958082" alt="" className="productInfoImg" />
                  <span className="productName">Celular iPhone 11 128 Gb - Gris</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">1</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Ventas:</span>
                      <span className="productInfoValue">5</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Activo:</span>
                      <span className="productInfoValue">Sí</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">En stock:</span>
                      <span className="productInfoValue">No</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Nombre del producto</label>
                  <input type="text" placeholder="Celular iPhone 11 128 Gb - Gris" />
                  <label>En Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Sí</option>
                      <option value="no">No</option>
                  </select>
                  <label>Estado</label>
                  <select name="active" id="active">
                      <option value="yes">Disponible</option>
                      <option value="no">Agotado</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-purple-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1566960958082" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Actualizar</button>
              </div>
          </form>
      </div>
    </div>
  );
}