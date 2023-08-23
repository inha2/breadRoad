import React, { useState, useEffect } from "react";
import "../style/bread.css";
import { useNavigate, useParams } from "react-router-dom";
import breadInfoData from "../data/bbangInfo.json";
import Footer from "./footer";
function Bread() {
  const navigate = useNavigate();
  const { breadName } = useParams();
  const [address, setAddress] = useState();
  const [name, setName] = useState();
  const [storeBreadDetailInfo, setStoreBreadDetailInfo] = useState();
  const [storeDetailInfo, setStoreDetailInfo] = useState();
  const [storeOpenDt, setStoreOpenDt] = useState();
  const [mainImage, setMainImage] = useState();
  const [result1, setResult1] = useState();
  const result = breadInfoData.find((item) => item.name === breadName) || null;
  useEffect(() => {
    setResult1(result);
    setMainImage(result.mainImage);
    setAddress(result.address);
    setName(result.name);
    setStoreBreadDetailInfo(result.storeBreadDetailInfo);
    setStoreDetailInfo(result.storeDetailInfo);
    setStoreOpenDt(result.storeOpenDt);
    // alert(result.mainImage);
  }, []);
  console.log(mainImage);
  console.log("?", result1);
  // breadName;
  const like = () => {
    alert("마이페이지에 저장되었습니다.");
  };
  return (
    <div className="container">
      <div className="bread_container">
        <div className="bread_container_wrap">
          <div className="bread_container_contents">
          <img src={require(`../image/${result.mainImage}`)} alt="" />
          {/* <img src={require(`../image/${mainImage}`).default} alt="Image 1" /> */}
          <div className="bread_info_img">
            {result.images.map((item) => {
              return <img src={require(`../image/${item.imageUrl}`)} alt="" />;
            })}
            {/* 
          <img src={require("../image/동네빵집3.jpeg")} />
          <img src={require("../image/동네빵집4.jpeg")} /> */}
          </div>
          <div className="bread_info_text">
            <div className="like_button">
              <strong>{name}</strong>
              <button onClick={like}>❤️</button>
            </div>
            <p>{address}</p>
            <p>상세정보</p>
            <p>{storeOpenDt}</p>
            <p>{storeDetailInfo}</p>
            <p>{storeBreadDetailInfo}</p>
          </div>
          </div>
          
        </div>
        <Footer/>

      </div>
    </div>
  );
}
export default Bread;