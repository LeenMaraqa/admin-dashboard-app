import { useEffect, useState } from "react";
import "./users-table.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  const handleDelete = (id) => {
    setUsers(users.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "username",
      headerName: "User",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", type: "Email", width: 250 },
    {
      field: "age",
      headerName: "Age",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 190,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 170,

      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/users/${params.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://my.api.mockaroo.com/users.json?key=f4868e30"
        );
        const responseData = await response.json();
        setUsers(responseData);
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="usersTable" >
      <div className="usersTableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New 
        </Link>
      </div>
      <DataGrid
        rows={users}
        columns={columns}
        className="datagrid"
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 8, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default UsersTable;
