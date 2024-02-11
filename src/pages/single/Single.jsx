import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/income chart/IncomeChart";
import List from "../../components/Latest Transactions/LatestTransactions";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Single = () => {
  const { userId } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          // "https://my.api.mockaroo.com/users.json?key=f4868e30"
          "https://my.api.mockaroo.com/admindashboard-users.json?key=6b7de8e0"
        );
        const responseData = await response.json();
        const selectedUser = responseData.filter((user) => user.id == userId);
        setUser(selectedUser.length > 0 ? selectedUser[0] : null);

        console.log("selectedUser", selectedUser);

        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);
  console.log("user", user);
  console.log("user type", typeof user);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            {user && (
              <div className="item">
                <img src={user.img} alt="" className="itemImg" />
                <div className="details">
                  <h1 className="itemTitle">{user.username}</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">{user.email}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">+1 2345 67 89</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">
                      Elton St. 234 Garden Yd. NewYork
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">USA</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
