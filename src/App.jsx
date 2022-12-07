import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Row } from "react-bootstrap";
import React, { useState } from "react";
import data from "./data";
import Product from "./componet/product";
import Detail from "./pages/Detail";
import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate(); // hook

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="navCss">
        <Container className="navContainer">
          <Navbar.Brand href="#home">망하는 코딩인생</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="link" to="/">
              홈
            </Link>
            <Link className="link" to="/detail">
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
                  <Product shoes={shoes[i]} i={i + 1} key={shoses.id} />
                  /* props를 넘겨줄 때는 'shoes(이 부분을 넘겨줌) ={shoes[1]}' */
                  /*map(속성 및 값, 인덱스 번호)*/
                );
              })}
            </Row>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

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
