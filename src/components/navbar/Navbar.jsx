import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import ChatIcon from "@mui/icons-material/Chat";
import Profile from "../../images/profile.webp"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="right">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsActiveOutlinedIcon className="icon" />
            <div className="notification">1</div>
          </div>
          <div className="item">
            <MarkChatUnreadOutlinedIcon className="icon" />
            <div className="notification">1</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src={Profile}
              alt="profileImage"
              className="profileImage"
            />{" "}
          </div>
          <div className="item">
            <SettingsIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
