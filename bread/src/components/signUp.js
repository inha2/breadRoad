import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
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

function SignUP(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // 이메일 상태 변수
  const [password, setPassword] = useState(""); // 비밀번호 상태 변수
  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        // 회원가입이 성공하면 알림을 띄우고 로그인 페이지로 이동
        alert("회원가입이 완료되었습니다!");
        navigate("/login");
      })
      .catch((error) => {
        // 회원가입 실패 시 에러 메시지를 출력하거나 예외 처리
        console.error("SignUp error:", error);
        alert("회원가입에 실패했습니다.")
      });
  };
  return (
    <div className="container">
      <div className="login_container">
        <div className="login_container_login">
          <p>빵 덕후들의 성지 계정을 생성하십시오</p>
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
                  value={email} // 입력값을 상태 변수에 바인딩
                  onChange={(e) => setEmail(e.target.value)} // 입력값 변경 시 상태 변수 업데이트
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="6">
                password
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  value={password} // 입력값을 상태 변수에 바인딩
                  onChange={(e) => setPassword(e.target.value)} // 입력값 변경 시 상태 변수 업데이트
                />
              </Col>
            </Form.Group>
          </Form>
        </div>
        <div className="login_button_content_wrap">
          <Button onClick={handleSignUp} variant="outline-warning">
            가입하기
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}
export default SignUP;
