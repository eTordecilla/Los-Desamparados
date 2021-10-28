import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";
  import "./user.css";
  
  export default function User() {
    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Editar usuario</h1>
          <Link to="/newUser">
            <button className="userAddButton">Crear usuario</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">Pepito Perez</span>
                <span className="userShowUserTitle">Vendedor</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Información del usuario</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">pepito69</span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">07.12.1990</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">3201234567</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">pepito69@gmail.com</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">Medellín | Antioquia</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Editar</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Nombre de usuario</label>
                  <input
                    type="text"
                    placeholder="pepito69"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Nombre completo</label>
                  <input
                    type="text"
                    placeholder="Pepito Perez"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Correo electrónico</label>
                  <input
                    type="text"
                    placeholder="pepito69@gmail.com"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Teléfono</label>
                  <input
                    type="text"
                    placeholder="320 123 4567"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="Medellín | Antioquia"
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Actualizar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }