import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../style/login.css";
import Button from "react-bootstrap/Button";
function SignUP() {
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
          <Button variant="outline-warning">가입하기</Button>{" "}
        </div>
      </div>
    </div>
  );
}
export default SignUP;
