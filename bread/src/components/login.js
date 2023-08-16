import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../style/login.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app"; // 변경된 import 문
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeduizTwXsKAnuxzRRbijhXtr3yq4ZcQs",
  authDomain: "bread-dba46.firebaseapp.com",
  databaseURL: "https://bread-dba46-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bread-dba46",
  storageBucket: "bread-dba46.appspot.com",
  messagingSenderId: "958768140307",
  appId: "1:958768140307:web:b31eb2c13def9a7421afe6",
};
firebase.initializeApp(firebaseConfig);

function Login(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate("/main");
      })
      .catch((error) => {
        alert("로그인에 실패했습니다. 아이디와 비밀번호를 다시 확인하세요.")
      });
  };

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
                <Form.Control
                  type="email"
                  placeholder="email@example.co.kr"
                  value={email} // 상태 변수와 바인딩
                  onChange={(e) => setEmail(e.target.value)} // 상태 업데이트 함수 할당
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="6">
                password
              </Form.Label>
              <Col sm="9">
                <Form.Control type="password"
                  placeholder="비밀번호를 입력하세요"
                  value={password} // 입력값을 상태 변수에 바인딩
                  onChange={(e) => setPassword(e.target.value)}></Form.Control>
              </Col>
            </Form.Group>
          </Form>
        </div>
        <div className="login_button_content_wrap">
          <Button onClick={handleLogin} variant="outline-warning">
            로그인
          </Button>{" "}
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
