import React from "react";
import "../style/first.css";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
//버튼을 누르면 로그인페이지로 넘어감
function First(props) {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="first_container">
        <p>
          빵<br />길<br />인<br />생
        </p>
        <div className="first_button_content_wrap">
          <Button
            onClick={() => {
              navigate("/login");
            }}
            variant="outline-warning"
          >
            로그인
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}
export default First;
