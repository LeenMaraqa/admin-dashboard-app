import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ViewListIcon from "@mui/icons-material/ViewList";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Leen Admin</span>
        </Link>
      </div>
      {/* <hr /> */}
      <div className="center">
        <ul>
          <div className="title">MAIN</div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <div className="title">LISTS</div>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              {" "}
              <PeopleOutlineOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <li>
            {" "}
            <ProductionQuantityLimitsIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            {" "}
            <ViewListIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            {" "}
            <AirportShuttleIcon className="icon" />
            <span>Delivery</span>
          </li>
          <div className="title">USEFUL</div>
          <li>
            {" "}
            <QueryStatsIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            {" "}
            <NotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>
          <div className="title">SERVICES</div>
          <li>
            {" "}
            <SettingsSuggestIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            {" "}
            <SettingsSuggestIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            {" "}
            <SettingsSuggestIcon className="icon" />
            <span>Settings</span>
          </li>
          <div className="title">USER</div>
          <li>
            {" "}
            <ManageAccountsIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            {" "}
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
          <div className="title">THEME</div>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
