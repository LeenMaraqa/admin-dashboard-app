import { useEffect, useState } from "react";
import "./products-table.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const ProductsTable = () => {
  const [users, setUsers] = useState([]);

  const handleDelete = (id) => {
    setUsers(users.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "title",
      headerName: "Title",
      width: 190,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.image} alt="avatar" />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "category ",
      headerName: "category",
      width: 180,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.category}
          </div>
        );
      },
    },
    {
      field: "description",
      headerName: "Description",
      width: 230,
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.price}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 100,

      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.stock}
          </div>
        );
      },
    },
    {   
         field: "action",
     headerName: "Action",
     width: 180,

      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/products/${params.id}`}
              style={{ textDecoration: "none" }}
            >
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
          "https://my.api.mockaroo.com/products-adminDashboard.json?key=f4868e30"
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
    <div className="usersTable">
      <div className="usersTableTitle">
        Add New Product
        <Link to="/products/new" className="link">
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

export default ProductsTable;
