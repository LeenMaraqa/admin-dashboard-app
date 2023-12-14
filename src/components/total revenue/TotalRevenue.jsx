import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import "./total-revenue.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
const TotalRevenue = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://my.api.mockaroo.com/data.json?key=f4868e30"
        );
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        const responseData = await response.json(); //promise => response.json();
        // Simulate a delay between each data point for gradual rendering
        const delayedData = [];
        for (let i = 0; i < responseData.length; i++) {
          await new Promise((resolve) => {
            setTimeout(resolve, 1500);
          });
          delayedData.push(responseData[i]);
          setData([...delayedData]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const totalValue = data.reduce((total, item) => total + item.value, 0);
  const dataWithPercentage = data.map((item) => ({
    ...item,
    percentage: ((item.value / totalValue) * 100).toFixed(2),
  }));

  return (
    <div className="totalRevenue">
      <div className="head">
        <span className="title">Total Revenue</span>
        <MoreVertIcon style={{ cursor: "pointer" }} />
      </div>
      <div className="body">
        <div className="chart">
          {" "}
          <ResponsiveContainer width="100%" height={150}>
            <PieChart width={400} height={150}>
              <Pie
                data={data}
                label={false}
                dataKey="value"
                cx="50%"
                cy="50%"
                animationDuration={700}
                innerRadius={60}
                outerRadius={75}
                startAngle={90}
                endAngle={-360}
              >
                {data.map((entry) => (
                  <Cell key={entry.id} fill={entry.color} />
                ))}
                <Label fill="grey" position="center">
                  {dataWithPercentage[0] &&
                    dataWithPercentage[0].percentage + "%"}
                </Label>
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="details">
          {" "}
          <div className="title">Total sales made today</div>
          <div className="amount">770$</div>
          <div>
            {" "}
            Previous transactions processing. Last payments may not be included.
          </div>
          <div className="summary">
            <div className="item">
              <div className="itemTitle">Target</div>
              <div className="itemResult negative">
                <div className="resultAmount">
                  {" "}
                  <KeyboardArrowDownIcon className="icon" fontSize="small" />
                  $12.4k
                </div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Last Week</div>
              <div className="itemResult positive">
                <div className="resultAmount">
                  {" "}
                  <KeyboardArrowUpOutlinedIcon
                    className="icon"
                    fontSize="small"
                  />
                  $12.4k
                </div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Last Month</div>
              <div className="itemResult positive">
                <div className="resultAmount">
                  {" "}
                  <KeyboardArrowUpOutlinedIcon
                    className="icon"
                    fontSize="small"
                  />
                  $12.4k
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default TotalRevenue;
