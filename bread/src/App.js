import "./App.css";
import "./style/first.css";
import Button from "react-bootstrap/Button";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import React from "react";
import Login from "./components/login";
import First from "./components/first";
import NotFound from "./components/notFound";
import Signup from "./components/signUp";
import Main from "./components/main";
import Honey from "./components/honey";
import My from "./components/my";
import BangZip from "./components/bbangZip";
import Bread from "./components/bread";
import HoneyZip from './components/honeyZip';
import HoneyZipInfo from './components/honeyZipInfo'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<Signup />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/honey" element={<Honey />}></Route>
          <Route path="/my" element={<My />}></Route>
          <Route path="/bangzip" element={<BangZip />}></Route>
          <Route path="/honeyzip" element={<HoneyZip />}></Route>
          <Route path="/honeyzipinfo" element={<HoneyZipInfo />}></Route>
          <Route path="/bread/:breadName" element={<Bread />}></Route>
          {/* 엘리먼트의 상단에 위치하는 라우트들의 규칙을 모두 확인하고, 일치하는 라우트가 없다면 이 라우트가 화면에 나타나게 됩니다. */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// const firebaseConfig = {
//   apiKey: "AIzaSyCeduizTwXsKAnuxzRRbijhXtr3yq4ZcQs",
//   authDomain: "bread-dba46.firebaseapp.com",
//   databaseURL: "https://bread-dba46-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "bread-dba46",
//   storageBucket: "bread-dba46.appspot.com",
//   messagingSenderId: "958768140307",
//   appId: "1:958768140307:web:b31eb2c13def9a7421afe6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
