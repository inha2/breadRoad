import React from "react";
import "../style/honeyZip.css";
import { useNavigate } from "react-router-dom";
import breadInfoData from "../data/bbangInfo.json";
import { Button } from "react-bootstrap";
import Footer from "./footer";
function HoneyZip() {
  const navigate = useNavigate();
  return (
    <div className="honey_container">
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
      <div className="honey_zip_container">
        <div className="honey_zip_content">
          <div
            onClick={() => {
              navigate("/honeyzipinfo");
            }}
            className="honey_zip_content_salt_bread"
          ></div>
          <div className="honey_zip_content_text">
            <p>서울과 인천을 넘나드는</p>
            <p>소금빵집 4곳</p>
            <p>소금빵 맛집 찾아 삼만리</p>
          </div>
        </div>
        <div className="honey_zip_content">
          <div className="honey_zip_content_fruit_bread"></div>
          <div className="honey_zip_content_text">
            <p>알록달록 귀여운</p>
            <p>후르츠산도 맛집 6곳</p>
            <p>맛은 귀엽지만은 않으니 중독주의</p>
          </div>
        </div>
        <div className="honey_zip_content">
          <div className="honey_zip_content_zonmat_bread"></div>
          <div className="honey_zip_content_text">
            <p>검증된 최고 존업 빵집</p>
            <p>맛있을 줄 알았는데 더 맛있음</p>
          </div>
        </div>
      </div>
      <Footer/>

    </div>
  );
}
export default HoneyZip;