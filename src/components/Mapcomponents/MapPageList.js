import setMapProjection from "../helpers/setMapProjection";
import useMapTools from "../useMapTools.js";
import Mapmain from "./MapPage.js";
import "./MapPageList.css";
import * as d3 from "d3";

export default function MapPageList(props) {
  // 1) geoJSON 로드 및 툴팁 생성
  const {mapData} = useMapTools();

  // 지도 데이터가 완전히 로드된 경우에만 지도 렌더링
  if (!mapData.loading) {
    // 2) 영역 렌더링
    // 나중에 사용할 올바른 투영을 기반으로 경로 함수를 계산한다
    const path = d3.geoPath().projection(setMapProjection(mapData.data));
    // 각 geoJSON 좌표에 대해 동등한 svg 경로를 계산하고 전달한다
    const MapPages = mapData.data.features.map((data) => {
      const region_name = data.properties["name"];
      console.log(data.properties)
      return (
        <Mapmain
          key={data.properties.code}
          path={path(data)}
          tooltipData={region_name}
        />
      );
    });

    return (
      <>
        <h1>대한민국 지도입니다</h1>
        <svg className="map-canvas">
          <g>{MapPages}</g>
        </svg>
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}