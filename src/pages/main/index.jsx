import React, { useEffect } from "react";
import imageUrl from "@/assets/img";
import Button from "component/button";

import styled from "styled-components";

import { http } from "~lib";
import { useQuery } from "react-query";

const MainContainer = styled.div`
  margin-top: 4rem;
  .section-1 {
    width: 100%;
    max-width: 1150px;
    margin: 0 auto;
    .box-1 {
      flex: 40%;
      .box-text {
        font-size: 3.5rem;
      }
    }
    .box-2 {
      flex: 30%;
      .chart-image {
        object-fit: contain;
      }
    }
  }
  .section-2 {
    border-top: 1px solid #d3d3d3;
    height: 500px;
    font-size: 30px;
  }
  .section-3 {
    border-top: 1px solid #d3d3d3;
    height: 500px;
    font-size: 30px;
  }
  .section-4 {
    border-top: 1px solid #d3d3d3;
    height: 500px;
    font-size: 30px;
  }
  .section-5 {
    border-top: 1px solid #d3d3d3;
    height: 300px;
  }
`;

const MainPage = () => {
  useEffect(() => {
    // init();
  });

  const { isLoading, error, data } = useQuery("reqData", async () => {
    const r = await http.send();
    return r
    // console.log(r)
  });

  if (isLoading) return console.log("loading...");

  if (error) return "error" + error.message;

  console.log(data, "data");
  // console.log(r);

  // const init = async () => {};

  return (
    <MainContainer className="flex flex-col">
      <div className="section-1 flex">
        <div className="box-1">
          <div className="box-text">데이터 구매부터 분석까지</div>
          <div className="box-text">
            All you need is <span className="box-text default-color">AccuRator</span>
          </div>
          <div className="desc">
            원하는 데이터의 중계,융합,유통부터 전문가들을 통한
            <br />
            Professional Service와 Platform Service까지
            <br />
            고객의 비지니스를 위한 데이터의 모든 것을 제공합니다.
          </div>
          <Button name="Start Free Trial" />
          <Button name="View Demo" />
        </div>
        <div className="box-2">
          <img className="chart-image" src={imageUrl.mainChartImg} alt="" />
        </div>
      </div>
      <div className="section-2 flex items-center justify-center">1</div>
      <div className="section-3 flex items-center justify-center">2</div>
      <div className="section-4 flex items-center justify-center">3</div>
      <div className="section-5 flex items-center justify-center">
        <Button name="contact us" primary />
      </div>
    </MainContainer>
  );
};
export default MainPage;
