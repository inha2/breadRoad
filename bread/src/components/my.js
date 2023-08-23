import React from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./footer";
import "../style/my.css";
function My(props) {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="my_container">
        <div className="my_container_contents_wrap">
          <div className="my_container_wrap">
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
            <div className="my_bang">
              <p>빵집보관함</p>
            </div>
          </div>
          <div className="my_bang_zip_wrap">
            <div className="my_bang_zip">
              <img
                onClick={() => {
                  navigate("/bread/런던베이글(안국)");
                }}
                src={require("../image/런던베이글.jpeg")}
              />
            </div>
            <div className="my_bang_zip">
              <img
                onClick={() => {
                  navigate("/bread/성심당");
                }}
                src={require("../image/성심당4.jpeg")}
              />
            </div>
            <div className="my_bang_zip">
              <img
                onClick={() => {
                  navigate("/bread/어거스트 올리브");
                }}
                src={require("../image/어거스트올리브4.jpeg")}
              />
            </div>
            <div className="my_bang_zip">
              <img
                onClick={() => {
                  navigate("/bread/헤이스위디");
                }}
                src={require("../image/헤이스위디4.jpeg")}
              />
            </div>
          </div>
          <div className="my_bang_zip_wrap">
            <div className="my_bang_zip">
              <img
                onClick={() => {
                  navigate("/bread/동네빵집");
                }}
                src={require("../image/동네빵집.jpeg")}
              />
            </div>
            <div className="my_bang_zip">
              <img
                onClick={() => {
                  navigate("/bread/솔티베이커리");
                }}
                src={require("../image/솔티베이커리.jpeg")}
              />
            </div>
            <div className="my_bang_zip">
              <img
                onClick={() => {
                  navigate("/bread/씨스터브레드");
                }}
                src={require("../image/씨스터브레드.jpeg")}
              />
            </div>
            <div className="my_bang_zip">
              <img
                onClick={() => {
                  navigate("/bread/아베베 베이커리 서울");
                }}
                src={require("../image/아베베베이커리.jpeg")}
              />
            </div>
          </div>
          <div className="my_bang_zip_wrap">
            <div className="my_bang_zip">
              <img
                onClick={() => {
                  navigate("/bread/바다까까");
                }}
                src={require("../image/바다까까.jpeg")}
              />
            </div>
            <div className="my_bang_zip"></div>
            <div className="my_bang_zip"></div>
            <div className="my_bang_zip">
              <p></p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}
export default My;