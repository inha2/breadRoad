import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import breadData from "../data/bbang.json";
import "../style/main.css";
import Footer from "./footer";

const { kakao } = window;
function Main() {
  const [searchValue, setSearchValue] = useState("");
  const [map, setMap] = useState();
  const [markers, setMarkers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    let imageSize = new kakao.maps.Size(24, 35);
    const pinImage = require("../image/image.png");
    let markerImage = new kakao.maps.MarkerImage(pinImage, imageSize);
    // Initialize the map
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.510934, 127.121529),
      level: 10,
    };
    const map = new kakao.maps.Map(container, options);
    setMap(map);

    // Create markers and infowindows
    const createdMarkers = breadData.map((item) => {
      const marker = new kakao.maps.Marker({
        map,
        position: new kakao.maps.LatLng(item.lat, item.lng),
        title: item.name,
        image: markerImage,
      });

      const infowindow = new kakao.maps.InfoWindow({
        content: `<div className="info-window" style="padding:5px;">${item.name}</div>`,
      });

      infowindow.open(map, marker);
      // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      // var content = '<div class="customoverlay">' +
      // '  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
      //     `<span class="title">${item.name}</span>` +
      // '  </a>' +
      // '</div>';

      // // 커스텀 오버레이를 생성합니다
      // var customOverlay = new kakao.maps.CustomOverlay({
      // map: map,
      // position: new kakao.maps.LatLng(item.lat, item.lng),
      // content: content,
      // yAnchor: 1
      // });

      // 클릭시 페이지 이동
      kakao.maps.event.addListener(marker, "click", () => {
        console.log(marker);
        // infowindow.open(map, marker);
        const clickedPosition = marker.getPosition(); // Get the clicked marker's position
        console.log("Clicked Marker Position:", item.name);
        navigate(`/bread/${item.name}`);
      });
      return { marker };
    });

    setMarkers(createdMarkers);
    //
    // return () => {
    //   // Clean up markers and infowindows
    //   createdMarkers.forEach(({ marker, infowindow }) => {
    //     infowindow.close();
    //     marker.setMap(null);
    //   });
    // };
  }, []);

  const handleOnKeyPress = async (e) => {
    console.log(e.target.value.trim());
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      const searchStore = breadData.find((item) => item.name === e.target.value);
      if (searchStore) {
        const bounds = new kakao.maps.LatLngBounds();
        bounds.extend(new kakao.maps.LatLng(searchStore.lat, searchStore.lng));
        map.setBounds(bounds);
        map.setLevel(5);
      }
    }
  };

  return (
    <div className="container">
      <div className="main_container">
        <div className="my_page">
          <p>인하님</p>
          <Button
            onClick={() => {
              navigate("/login");
            }}
            variant="outline-warning"
          >
            로그아웃
          </Button>{" "}
        </div>
        <div className="main_search">
          <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onKeyPress={handleOnKeyPress} placeholder="빵집검색" />{" "}
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 51 52" fill="none">
            <path
              d="M37.1936 33.4715C40.2195 29.2598 41.5748 24.038 40.9883 18.8509C40.4018 13.6637 37.9168 8.89372 34.0304 5.49518C30.144 2.09664 25.1428 0.32019 20.0275 0.521236C14.9121 0.722282 10.0598 2.886 6.44134 6.5795C2.82285 10.273 0.705034 15.2239 0.511591 20.4417C0.318148 25.6595 2.06334 30.7594 5.39803 34.7211C8.73271 38.6828 13.411 41.2141 18.4968 41.8086C23.5827 42.4032 28.7011 41.017 32.828 37.9276H32.8249C32.9186 38.0551 33.0186 38.1762 33.1311 38.2941L45.1624 50.566C45.7483 51.1641 46.5432 51.5003 47.3722 51.5006C48.2012 51.5009 48.9963 51.1653 49.5827 50.5676C50.1691 49.9699 50.4987 49.1591 50.4989 48.3136C50.4992 47.468 50.1702 46.657 49.5842 46.0589L37.553 33.787C37.4413 33.6717 37.3211 33.5683 37.1936 33.4715ZM37.9999 21.2187C37.9999 23.5209 37.5553 25.8006 36.6916 27.9276C35.8278 30.0546 34.5618 31.9872 32.9658 33.6152C31.3698 35.2431 29.475 36.5344 27.3897 37.4155C25.3045 38.2965 23.0695 38.75 20.8124 38.75C18.5553 38.75 16.3203 38.2965 14.235 37.4155C12.1497 36.5344 10.255 35.2431 8.65898 33.6152C7.06297 31.9872 5.79695 30.0546 4.9332 27.9276C4.06944 25.8006 3.62488 23.5209 3.62488 21.2187C3.62488 16.5691 5.4357 12.11 8.65898 8.82224C11.8823 5.53449 16.254 3.68745 20.8124 3.68745C25.3708 3.68745 29.7425 5.53449 32.9658 8.82224C36.1891 12.11 37.9999 16.5691 37.9999 21.2187Z"
              fill="black"
            />
          </svg>
        </div>
        <div id="map" style={{ width: "100%", height: "100vh" }}></div>
        <Footer/>

      </div>
    </div>
  );
}
export default Main;
// kakao.maps.event.addListener(marker, "click", function () {
//   // 마커 위에 인포윈도우를 표시합니다
//   console.log(":::: marker info - > ", marker); //save <<

//   var lat = marker.getPosition().getLat();
//   var lng = marker.getPosition().getLng();
//   console.log(lat);
//   console.log(lng); //<<
//   const storeTitle = positions.map((item) => {
//     if (item.geometry.lat === lat && item.geometry.lng === lng) {
//       return item.title;
//     }
//   });
//   // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다 save <<<<<<
//   var iwContent = `<div style="padding:5px; border-radius:10px;">${storeTitle}</div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
//     iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

//   // 인포윈도우를 생성합니다
//   var infowindow = new kakao.maps.InfoWindow({
//     //<<
//     //save good
//     content: iwContent,
//     removable: iwRemoveable,
//   });

//   infowindow.open(map, marker);
// });

// import "firebase/compat/database";
// import "firebase/compat/";

// const firebaseConfig = {
//   apiKey: "AIzaSyCeduizTwXsKAnuxzRRbijhXtr3yq4ZcQs",
//   authDomain: "bread-dba46.firebaseapp.com",
//   databaseURL: "https://bread-dba46-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "bread-dba46",
//   storageBucket: "bread-dba46.appspot.com",
//   messagingSenderId: "958768140307",
//   appId: "1:958768140307:web:b31eb2c13def9a7421afe6",
// };
// firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);