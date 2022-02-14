import React, { useState, useEffect } from "react";
import { Mix } from "@ant-design/plots";
import { dataChart } from "./dataChart";
import "./Chart.css";
import { useSelector } from "react-redux";

const DemoMix = () => {
  const [data, setData] = useState({});
  const store = useSelector((state) => state.data);
  console.log(store);
  const addCategore = useSelector((state) => state.addCategore);
  console.log(addCategore.name);
  const ketmonjon = store.map((product) => {
    return {
      area: product.name,
      name: product.name,
      bill: +product.price,
    };
  });
  const qurbontoy = store.map((product)=> {
    return    {
      area: product.name,
      cat: product.name,
      count: +product.price,
    }
  })

  const lineChart = store.map(product => {
    return{
      time: "2021 oy 4",
      area: product.name,
      value: product.price,
    }
  })
  console.log(ketmonjon);
  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    setData(dataChart);
  };
  if (!Object.keys(data).length) {
    return null;
  }

  const config = {
    tooltip: false,
    plots: [
      {
        type: "bar",
        region: {
          start: {
            x: 0,
            y: 0,
          },
          end: {
            x: 0.45,
            y: 0.45,
          },
        },
        options: {
          data: qurbontoy,
          xField: "count",
          yField: "area",
          seriesField: "cat",
          isStack: true,
          tooltip: {
            shared: true,
            showCrosshairs: false,
            showMarkers: false,
          },
          label: {},
          interactions: [
            {
              type: "active-region",
            },
          ],
        },
      },
      {
        type: "pie",
        region: {
          start: {
            x: 0.5,
            y: 0,
          },
          end: {
            x: 1,
            y: 0.45,
          },
        },
        options: {
          data: ketmonjon,
          angleField: "bill",
          colorField: "area",
          tooltip: {
            showMarkers: false,
          },
          radius: 0.85,
          label: {
            type: "inner",
            formatter: "{name}",
            offset: "-15%",
          },
          interactions: [
            {
              type: "element-active",
            },
          ],
        },
      },
      {
        type: "area",
        region: {
          start: {
            x: 0,
            y: 0.5,
          },
          end: {
            x: 1,
            y: 0.95,
          },
        },
        options: {
          data: lineChart,
          xField: "time",
          yField: "value",
          seriesField: "area",
          line: {},
          point: {
            style: {
              r: 2.5,
            },
          },
          meta: {
            time: {
              range: [0, 1],
            },
          },
          smooth: true,
          tooltip: {
            showCrosshairs: true,
            shared: true,
          },
        },
      },
    ],
  };

  return (
    <div className="chart">
      <Mix {...config} />;
    </div>
  );
};

export default DemoMix;
