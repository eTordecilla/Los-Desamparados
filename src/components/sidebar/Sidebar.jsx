import "./sidebar.css";
import { MdLineStyle } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";
import { AiOutlineUser} from "react-icons/ai";
import { RiDashboardLine } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";
import { HiOutlineDocument } from "react-icons/hi";





export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Panel</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active"></li>
            <MdLineStyle className="sidebarIcon" />
            Inicio
            <li className="sidebarListItem"></li>
            <IoAnalyticsSharp className="sidebarIcon" />
            Estadísticas
            
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menú rapido</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem"></li>
            <AiOutlineUser className="sidebarIcon" />
            Usuarios
            <li className="sidebarListItem"></li>
            <RiDashboardLine className="sidebarIcon"  />
            Productos
            <li className="sidebarListItem"></li>
            <MdAttachMoney />
            Ventas
            <li className="sidebarListItem"></li>
            <HiOutlineDocument className="sidebarIcon" />
            Reportes
          </ul>
        </div>
        
              </div>
    </div>
  );
}
