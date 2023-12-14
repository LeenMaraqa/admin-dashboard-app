import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./income-chart.scss";
import { useEffect, useState } from "react";

const revenue = [{
  "id": 1,
  "month": "January",
  "revenue": 57976.01
}, {
  "id": 2,
  "month": "February",
  "revenue": 73713.36
}, {
  "id": 3,
  "month": "March",
  "revenue": 38400.27
}, {
  "id": 4,
  "month": "April",
  "revenue": 47630.30
}, {
  "id": 5,
  "month": "May",
  "revenue": 26349.51
}, {
  "id": 6,
  "month": "June",
  "revenue": 73948.78
}];


const IncomeChart = () => {
//   const [revenue, setRevenue] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://my.api.mockaroo.com/months.json?key=f4868e30"
//         );
//         console.log("response", response);
//         const responseData = await response.json();
//         setRevenue(responseData);
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);
//   console.log("setRevenue", revenue);

  return (
    <div className="income">
      <div className="title">Last 6 Months (Revenue)</div>
      <ResponsiveContainer width="100%" height="100%" aspect={2 / 1}>
        <AreaChart
          width={500}
          height={400}
          data={revenue}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="transparent" />
          <XAxis dataKey="month" />
          {/* <YAxis /> */}
          <Tooltip />
          {/* stroke="#8884d8" fill="#8884d8" */}
          <Area
            type="monotone"
            dataKey={"revenue"}
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeChart;
