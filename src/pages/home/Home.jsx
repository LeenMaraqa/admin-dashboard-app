import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widgets from "../../components/widgets/Widgets";
import TotalRevenue from "../../components/total revenue/TotalRevenue";
import IncomeChart from "../../components/income chart/IncomeChart";
import LatestTransactions from "../../components/Latest Transactions/LatestTransactions";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="users" />
          <Widgets type="orders" />
          <Widgets type="earnings" />
          <Widgets type="balance" />
        </div>
        <div className="charts">
          <TotalRevenue />
          <IncomeChart />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <LatestTransactions />
        </div>
      </div>
    </div>
  );
};

export default Home;
