import "./widgets.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaidIcon from '@mui/icons-material/Paid';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
const Widgets = ({ type }) => {
  let data;
  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        link: "View all users",
        icon: (
          <PeopleIcon
            className="icon"
            style={{
              backgroundColor: "transparent",
            }}
          />
        ),
      };
      break;
    case "orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartIcon 
            className="icon"
            style={{
              backgroundColor: "transparent",
            }}
          />
        ),
      };
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <PaidIcon
            className="icon"
            style={{
              backgroundColor: "transparent",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletIcon

            className="icon"
            style={{
              backgroundColor: "transparent",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

    //temporary
    const amount = 100;

  return (
    <div className="widget">
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="number">{data.isMoney && "$"}{amount}</div>
        <div className="link">{data.link}</div>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          97%
        </div>
        <div className="icon">
          {data.icon}
        </div>
      </div>
    </div>
  );
};

export default Widgets;
