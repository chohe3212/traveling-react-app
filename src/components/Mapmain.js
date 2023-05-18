import React from "react";
import "./Mapmain.css";
import { DataMapsWrapper } from "traveling-react-app";
import d3 from "d3";

const demoProps = {
  scope: "korea",
  geographyConfig: {
    popupOnHover: true,
    highlightOnHover: true,
    borderColor: "#444",
    borderWidth: 0.5,
    dataUrl:
      "../assets/map/korea.json"
    //dataJson: topoJsonData
  },
  bubblesConfig: {
    borderWidth: 2,
    borderOpacity: 1,
    borderColor: "#FFFFFF",
    popupOnHover: true, // True to show the popup while hovering
    radius: null,
    popupTemplate: function (geo, data) {
      return `<div class="hoverinfo">city: ${data.state}, Slums: ${data.radius}%</div>`;
    },
    fillOpacity: 0.75,
    animate: true,
    highlightOnHover: true,
    highlightFillColor: "#FC8D59",
    highlightBorderColor: "rgba(250, 15, 160, 0.2)",
    highlightBorderWidth: 2,
    highlightBorderOpacity: 1,
    highlightFillOpacity: 0.85,
    exitDelay: 100, // Milliseconds
    key: JSON.stringify
  },
  fills: {
    MAJOR: "#306596",
    MEDIUM: "#0fa0fa",
    MINOR: "#bada55",
    defaultFill: "#dddddd"
  },
  data: {
    JH: { fillKey: "MINOR" },
    MH: { fillKey: "MINOR" }
  },
  setProjection: function (element) {
    var projection = d3.geo
      .mercator()
      .center([80, 25])
      .scale(600)
      .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
    var path = d3.geo.path().projection(projection);
    return { path: path, projection: projection };
  }
};

// const bubblesDemo = [
//   {
//     centered: "MH",
//     fillKey: "MAJOR",
//     radius: 20,
//     state: "Maharastra"
//   },
//   {
//     centered: "AP",
//     fillKey: "MAJOR",
//     radius: 22,
//     state: "Andhra Pradesh"
//   },
//   {
//     centered: "TN",
//     fillKey: "MAJOR",
//     radius: 16,
//     state: "Tamil Nadu"
//   },
//   {
//     centered: "WB",
//     fillKey: "MEDIUM",
//     radius: 15,
//     state: "West Bengal"
//   },
//   {
//     centered: "MP",
//     fillKey: "MEDIUM",
//     radius: 15,
//     state: "Madhya Pradesh"
//   },
//   {
//     centered: "UP",
//     fillKey: "MINOR",
//     radius: 8,
//     state: "Uttar Pradesh"
//   },
//   {
//     centered: "RJ",
//     fillKey: "MINOR",
//     radius: 7,
//     state: "Rajasthan"
//   }
// ];

function Map() {
  const [bubbles, setBubbles] = React.useState([]);
  // React.useEffect(() => {
  //   setInterval(() => {
  //     setBubbles(bubblesDemo);
  //   }, 1000);
  // }, []);
  return (
    <div style={{ width: "600px", height: "600px" }} className="App">
      <DataMapsWrapper {...demoProps} bubbles={bubbles} />
    </div>
  );
}

function Mapmain() {
  return (
    <div className="Mapmain">
      <div className="wrapper">
        <Map />
      </div>
    </div>
  )
}

export default Mapmain
