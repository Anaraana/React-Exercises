import React, { useState } from "react";
import { Chart } from "react-google-charts";
import "./index.css"

const BMIChart = () => {
  const [inputBmi, setInputBmi] = useState({ height: "", weight: "" });
  const [data, setData] = useState([
    ["Date", "BMI"],
  ]);

  console.log(data);

  const inputChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    console.log(inputBmi);
    setInputBmi((currState) => ({
      ...currState,
      [fieldName]: fieldValue,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let result = (inputBmi.weight / (inputBmi.height / 100) ** 2).toFixed(2);
    console.log(result);
    setData((currState) => {
      return [...currState, [new Date().toDateString(), parseInt(result)]];
    });
  };
  return (

    <div className="bmi-chart-main-container">
       <div
      className="big-container"
      style={{
        backgroundImage: `url(https://miro.medium.com/max/1024/0*EFSmC7qlmtY-iVEa.jpg)`
      }}
    >
      
      <span><h2>BMI Tracker</h2></span>
      <div>
        <form onSubmit={onSubmit}>
          <label>
            {" "}
            Height
            <input
              name="height"
              onChange={(e) => {
                inputChange(e);
              }}
              value={inputBmi.height}
            />
          </label>
          <label>
            {" "}
            Weight
            <input
              name="weight"
              onChange={(e) => {
                inputChange(e);
              }}
              value={inputBmi.weight}
            />
          </label>
          <button style={{ color: "blue" }} type="submit">
            Submit
          </button>
          <br/>
          <br/>
        </form>
      </div>
      {data.length > 1 && (
        <Chart
          chartType="LineChart"
          data={data}
          width="100%"
          height="400px"
          legendToggle
     
        />
      )}
    </div>
    </div>
  );
};


export default BMIChart;
