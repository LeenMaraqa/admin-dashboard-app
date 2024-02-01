import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/income chart/IncomeChart";
import List from "../../components/Latest Transactions/LatestTransactions";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Single = () => {
  const { userId } = useParams();
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026w=500",
      status: "active",
      email: "1snow@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Jamie Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026w=500",
      email: "2snow@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026w=500",
      email: "3snow@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Stark",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026w=500",
      email: "4snow@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Targaryen",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026w=500",
      email: "5snow@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Melisandre",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026w=500",
      email: "6snow@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026w=500",
      email: "7snow@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026w=500",
      email: "8snow@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026w=500",
      email: "snow@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026w=500",
      email: "snow@gmail.com",
      status: "active",
      age: 65,
    },
    {
      id: 11,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026w=500",
      status: "active",
      email: "1snow@gmail.com",
      age: 35,
    },
    {
      id: 12,
      username: "Jamie Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026w=500",
      email: "2snow@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 13,
      username: "Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026w=500",
      email: "3snow@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 14,
      username: "Stark",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026w=500",
      email: "4snow@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 15,
      username: "Targaryen",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026w=500",
      email: "5snow@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 16,
      username: "Melisandre",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026w=500",
      email: "6snow@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 17,
      username: "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026w=500",
      email: "7snow@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 18,
      username: "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026w=500",
      email: "8snow@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 19,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026w=500",
      email: "snow@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 20,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026w=500",
      email: "snow@gmail.com",
      status: "active",
      age: 65,
    },
  ]);

  //   const [users, setUsers] = useState([]);
  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       try {
  //         console.log("1");

  //         const response = await fetch(
  //           "https://my.api.mockaroo.com/users.json?key=f4868e30"
  //         );
  //         console.log("2");

  //         const responseData = await response.json();
  //         console.log("3");
  //         console.log("re asd",responseData);
  //         setUsers(responseData);
  //         const user =users.filter((item) => item.id == userId);
  //         setUsers( user);
  //         console.log("users ",users);
  //         console.log("user ",user);

  // console.log("4");

  //         console.log("users ",users);

  //         if (!response.ok) {
  //           console.log("5");
  //           throw new Error("failed to fetch data");
  //         }
  //       } catch (error) {
  //         console.log("6");

  //         console.log(error);
  //       }
  //     };

  //     fetchUsers();
  //   }, []);
  //   console.log("users ",users);

  const user = users.filter((item) => item.id == userId);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                // src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                src={user[0].img}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{user[0].username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{user[0].email}</span>
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
