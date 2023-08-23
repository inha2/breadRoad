import "../style/honeyZipInfo.css";
import breadInfoData from "../data/bbangInfo.json";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Footer from "./footer";
function HoneyZipInfo() {
  const navigate = useNavigate();

  const result = breadInfoData;

  const like = () => {
    alert("마이페이지에 저장되었습니다.");
  };
  console.log(result);
  return (
    <div className="container">
      <div className="honeyZipInfo_container">
        <div className="honeyZipInfo_container_wrap">
          <div className="my_page">
            <p>인하님</p>
            <Button
              onClick={() => {
                navigate("/login");
              }}
              variant="outline-warning"
            >
              로그아웃
            </Button>{" "}
          </div>
          <img src={require(`../image/${result[8].mainImage}`)} alt="" />
          <div className="honeyZipInfo_info_img">
            {result[8].images.map((item) => {
              return <img src={require(`../image/${item.imageUrl}`)} alt="" />;
            })}
          </div>
          <div className="honeyZipInfo_info_text">
            <strong>{result[8].name}</strong>
            <button onClick={like}>❤️</button>
            <p>{result[8].address}</p>
            <p>상세정보</p>
            <p>{result[8].storeOpenDt}</p>
            <p>{result[8].storeDetailInfo}</p>
            <p>{result[8].storeBreadDetailInfo}</p>
          </div>
          <img src={require(`../image/${result[9].mainImage}`)} alt="" />
          <div className="honeyZipInfo_info_img">
            {result[9].images.map((item) => {
              return <img src={require(`../image/${item.imageUrl}`)} alt="" />;
            })}
          </div>
          <div className="honeyZipInfo_info_text">
            <strong>{result[9].name}</strong>
            <button onClick={like}>❤️</button>
            <p>{result[9].address}</p>
            <p>상세정보</p>
            <p>{result[9].storeOpenDt}</p>
            <p>{result[9].storeDetailInfo}</p>
            <p>{result[9].storeBreadDetailInfo}</p>
          </div>
          <img src={require(`../image/${result[10].mainImage}`)} alt="" />
          <div className="honeyZipInfo_info_img">
            {result[10].images.map((item) => {
              return <img src={require(`../image/${item.imageUrl}`)} alt="" />;
            })}
          </div>
          <div className="honeyZipInfo_info_text">
            <strong>{result[10].name}</strong>
            <button onClick={like}>❤️</button>
            <p>{result[10].address}</p>
            <p>상세정보</p>
            <p>{result[10].storeOpenDt}</p>
            <p>{result[10].storeDetailInfo}</p>
            <p>{result[10].storeBreadDetailInfo}</p>
          </div>
          <img src={require(`../image/${result[11].mainImage}`)} alt="" />
          <div className="honeyZipInfo_info_img">
            {result[11].images.map((item) => {
              return <img src={require(`../image/${item.imageUrl}`)} alt="" />;
            })}
          </div>
          <div className="honeyZipInfo_info_text">
            <strong>{result[11].name}</strong>
            <button onClick={like}>❤️</button>
            <p>{result[11].address}</p>
            <p>상세정보</p>
            <p>{result[11].storeOpenDt}</p>
            <p>{result[11].storeDetailInfo}</p>
            <p>{result[11].storeBreadDetailInfo}</p>
          </div>
        </div>
        <Footer/>

      </div>
    </div>
  );
}
export default HoneyZipInfo;