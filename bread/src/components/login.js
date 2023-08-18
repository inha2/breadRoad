import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../style/login.css";
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

function Login(props) {
  const navigate = useNavigate();
  const passwordInputRef = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(""); // 이메일 오류 상태 변수 추가
  const [passwordError, setPasswordError] = useState(""); // 비밀번호 오류 상태 변수 추가

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError(newEmail === "" || validateEmail(newEmail) ? "" : "유효한 이메일 형식이 아닙니다.");
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError(newPassword === "" || validatePassword(newPassword) ? "" : "비밀번호는 6자 이상이어야 합니다.");
  };

  const handleLogin = () => {
    if (!email || !password) {
      setEmailError(!!email ? "" : "이메일을 입력해주세요.");
      setPasswordError(!!password ? "" : "비밀번호를 입력해주세요.");
      return;
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate("/main");
      })
      .catch((error) => {
        console.log(error.code);
        if (error.code === "auth/user-not-found") {
          alert("존재하지 않는 회원입니다.");
          return;
        } else if (error.code === "auth/wrong-password") {
          alert("비밀번호가 틀렸습니다.");
          setPasswordError("비밀번호를 확인하세요");
          setPassword("");
          if (passwordInputRef.current) {
            passwordInputRef.current.focus();
          }
        } else if (error.code === "auth/too-many-requests") {
          alert("잠시후에 이용해주세요.");
        }
      });
  };

  const validateEmail = (inputEmail) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(inputEmail);
  };

  const validatePassword = (inputPassword) => {
    return inputPassword.length >= 6;
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
                <Form.Control type="email" placeholder="email@example.co.kr" value={email} onChange={handleEmailChange} isInvalid={emailError !== ""} />
                <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
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
                  value={password}
                  onChange={handlePasswordChange}
                  isInvalid={passwordError !== ""}
                  ref={passwordInputRef} // ref 설정
                />
                <Form.Control.Feedback type="invalid">{passwordError}</Form.Control.Feedback>
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
