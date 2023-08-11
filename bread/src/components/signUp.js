import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../style/login.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
function SignUP(props) {
  const navigate = useNavigate();
  const handleSignUp = () => {
    // 여기에 실제 회원가입 로직을 추가하고 완료 시 실행되는 코드를 작성합니다.
    // 예: 회원가입이 성공하면 알림을 띄우고 로그인 페이지로 이동합니다.
    alert("회원가입이 완료되었습니다!");
    navigate("/login");
  };
//변수를 만들어 이메일,비밀번호 담음
//이메일,비밀번호 형식에 맞게 안나오면 오류메시지 뜸
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
          <Button onClick={handleSignUp} variant="outline-warning">가입하기</Button>{" "}
        </div>
      </div>
    </div>
  );
}
export default SignUP;
