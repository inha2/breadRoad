import React from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import "../style/bangZip.css";
import Footer from "./footer";
//도넛,소금빵,케이크 등 맛집을 모아서 div로 묶음
//클릭하면 해당 모음맛집으로 이동
function BangZip(props) {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="bang_zip_container">
        <div className="bang_gul_zip"></div>
        <div className="bang_gul_zip">
          <div className="bang_gul_zip_img"></div>
          <div className="bang_gul_zip_img"></div>
          <div className="bang_gul_zip_img"></div>
        </div>
        <div className="bang_gul_zip_title">
            <p>bang</p>
        </div>
        <div className="bang_gul_zip_sub">
        <p>x</p>
        </div> 
        <Footer/>

      </div>
    </div>
  );
}
export default BangZip;