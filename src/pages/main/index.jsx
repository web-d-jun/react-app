import React from "react";
import imageUrl from "@/assets/img";

// import tw from "tailwind-styled-components";
import styled from "styled-components";

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
`;

const MainPage = () => {
  return (
    <MainContainer className="flex flex-col">
      <div className="section-1 flex">
        <div className="box-1">
          <div className="box-text default-font">데이터 구매부터 분석까지</div>
          <div className="box-text default-font">
            All you need is{" "}
            <span className="box-text default-font default-color">
              AccuRator
            </span>
          </div>
        </div>
        <div className="box-2">
          <img className="chart-image" src={imageUrl.mainChartImg} alt="" />
        </div>
      </div>
    </MainContainer>
  );
};
export default MainPage;
