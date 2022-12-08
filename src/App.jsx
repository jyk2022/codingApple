import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Row } from "react-bootstrap";
import React, { useState } from "react";
import data from "./data";
import Product from "./componet/product";
import Detail from "./pages/Detail";
import Detail1 from "./pages/Detail1";
import axios from "axios";
import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate(); // hook

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="navCss">
        <Container clas sName="navContainer">
          <Navbar.Brand href="#home">망하는 코딩인생</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="link" to="/">
              홈
            </Link>
            <Link className="link" to="/detail1">
              상세페이지
            </Link>
            <Link className="link" to="/event">
              이벤트
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <Row>
              <section className="main-img"></section>
              {shoes.map((shoses, i) => {
                return (
                  <Product shoses={shoses[i]} i={i + 1} key={shoses.id} />
                  /* props를 넘겨줄 때는 'shoes(이 부분을 넘겨줌) ={shoes[1]}' */
                  /*map(속성 및 값, 인덱스 번호)*/
                );
              })}
              <button
                onClick={() => {
                  axios
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((result) => {
                      let copy = [...shoes, ...result.data];
                      setShoes(copy);
                    });
                  // .catch(() => {
                  //   console.log("요청에 실패함");
                  // });
                  // axios.post('/보낼 url', {name: 'kim'}) post 보낼 때
                  //promise.all([axios.get(/url1),axios.get(/url2)]) 보낼 곳이 여러곳일 때!
                  // .then(())=>{ let copy = [...shoes, ...result.data]; setShoes(copy); })
                }}
              >
                버튼
              </button>
            </Row>
          }
        />
        <Route path="/detail1" element={<Detail1 shoes={shoes} />} />
        <Route path="/detail1/:id" element={<Detail shoes={shoes} />} />

        {/* <Route path="*" element={<div>없는 페이지에요</div>} /> */}
        {/* 페이지 잘못 입력하면 위의 페이지를 적어줍니다. */}

        {/* <Route path="/about/member" element={<div>멤버들</div>} />
        <Route path="/about/location" element={<div>회사위치</div>} /> */}
        {/* 아래 코드와 똑같음 */}

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버들</div>} />
          <Route path="location" element={<div>회사위치</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문 시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰 받기</div>} />
        </Route>
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사 정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}
export default App;
