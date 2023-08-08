import "./App.css";
import "./style/first.css";
import Button from "react-bootstrap/Button";
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import React from "react";
import Login from "./components/login";
import First from "./components/first";
import NotFound from "./components/notFound"
import Signup from "./components/signUp";
import Main from "./components/main"
import Honey from './components/honey'
import My from './components/my' 
import BangZip from "./components/bbangZip";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<Signup />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/honey" element={<Honey />}></Route>
          <Route path="/my" element={<My />}></Route>
          <Route path="/bangzip" element={<BangZip />}></Route>
          {/* 엘리먼트의 상단에 위치하는 라우트들의 규칙을 모두 확인하고, 일치하는 라우트가 없다면 이 라우트가 화면에 나타나게 됩니다. */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
