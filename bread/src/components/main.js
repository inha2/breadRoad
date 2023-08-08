import React from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";

function Main(props) {
  const navigate = useNavigate();
  return <div className="container">
    <input type="text" value="빵집검색"></input>
  </div>;
}
export default Main;
