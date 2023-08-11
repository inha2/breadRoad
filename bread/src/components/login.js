import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../style/login.css";
import Button from "react-bootstrap/Button";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import firebase from 'firebase/compat/app' // 변경된 import 문
import 'firebase/compat/auth'
 //아이디 비밀번호를 치면 로그인
//아이디 없으면 회원가입 버튼 누름
//회원가입 버튼 누르면 회원가입창으로 이동
//일치하면 로그인 두번쓰셧네
const firebaseConfig = {
  apiKey: "AIzaSyCeduizTwXsKAnuxzRRbijhXtr3yq4ZcQs",
  authDomain: "bread-dba46.firebaseapp.com",
  databaseURL: "https://bread-dba46-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bread-dba46",
  storageBucket: "bread-dba46.appspot.com",
  messagingSenderId: "958768140307",
  appId: "1:958768140307:web:b31eb2c13def9a7421afe6"
};

firebase.initializeApp(firebaseConfig)

      
function Login(props) {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="login_container">
        <div className="login_container_login">
          <p>빵의 세계로 로그인</p>                                                                                                                                                                                                                   
        </div>
        <div className="login_container_info">
          <Form className="login_container_form">
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="6">
                email
              </Form.Label>
              <Col sm="9">
                <Form.Control type="email" placeholder="email@example.co.kr" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="6">
                password
              </Form.Label>
              <Col sm="9">
                <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
              </Col>
            </Form.Group>
          </Form>
        </div>
        <div className="login_button_content_wrap">
          <Button onClick={()=>{navigate("/main")}} variant="outline-warning">로그인</Button>{" "}
          <Button
            onClick={() => {
              navigate("/signup");
            }}
            variant="outline-warning"
          >
            회원가입
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}
export default Login;
