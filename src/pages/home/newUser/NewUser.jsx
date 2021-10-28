import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Agregar usuario</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Nombre de usuario</label>
          <input type="text" placeholder="pepito69" />
        </div>
        <div className="newUserItem">
          <label>Nombre completo</label>
          <input type="text" placeholder="Pepito Perez" />
        </div>
        <div className="newUserItem">
          <label>Correo electrónico</label>
          <input type="email" placeholder="user@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Contraseña</label>
          <input type="password" placeholder="Escriba la contraseña" />
        </div>
        <div className="newUserItem">
          <label>Telefóno</label>
          <input type="text" placeholder="3201234567" />
        </div>
        <div className="newUserItem">
          <label>Dirección</label>
          <input type="text" placeholder="Medellín | Antioquia" />
        </div>
        <div className="newUserItem">
          <label>Rol</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Cliente</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Vendedor</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Administrador</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Activo</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Crear</button>
      </form>
    </div>
  );
}
