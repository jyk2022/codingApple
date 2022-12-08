import { Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 라이프 사이클이란? 페이지에 장착되기도 하는 것(mount)
//가끔 업데이트도 되는 것 (update)
//필요없으면 제거되는 것(unmount)
// 컴포넌트의 인생주기를 알면 간섭이 가능함(특정 코드 실행이 가능함)

// class Detail2 extends React.Component {
//   componentDidMount() {}
//   componentDidUpdate() {}
//   componentWillUnmount() {} -> 옛날 컴포넌트 만드는 방법
// }

function Detail1(props) {
  console.log("안녕");

  let [tap, tpaChange] = useState(0);
  let navigate = useNavigate();
  // clean up function
  // [usestate 이름]-> 의존성 배열: usestate가 변경될 때마다 상태를 업데이트 해준다.

  return (
    <div className="container">
      <div className="col">
        <div className="row-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="80%"
          />
          <h4>{props.shoes[0].title}</h4>
          <p>{props.shoes[0].price}</p>
          <button className="btn bt   n-danger">주문하기</button>
        </div>
        <p
          onClick={() => {
            navigate(`/detail1/1`);
          }}
        >
          상세페이지2
        </p>
        <p
          onClick={() => {
            navigate(`/detail1/1`);
          }}
        >
          상세페이지3
        </p>
      </div>
      <Nav variant="tabs" defaultActiveKey="/link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              tpaChange(0);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              tpaChange(1);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              tpaChange(2);
            }}
          >
            버튼3
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Taps tap={tap} />
    </div>
  );
}

// function Taps(props) {
//   if (props.tap == 0) {
//     return <div>내용0</div>;
//   }
//   if (props.tap == 1) {
//     return <div>내용1</div>;
//   }
//   if (props.tap == 2) {
//     return <div>내용2</div>;
//   }
// } 기본적으로는 이렇게 작성하기

function Taps({ tap }) {
  let [fade, setFade] = useState("");
  useEffect(() => {
    let a = setTimeout(() => {
      setFade(`end`);
    }, 10);
    return () => {
      setFade("");
    };
  }, [tap]);
  return (
    <div className={`start` + fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tap]}
    </div>
  );
}

// let NewBtn = styled.button(YellowBtn); -> 기존의 스타일을 복사할 수 있음`
//   추가로 커스텀 할 수 있음.
// `

export default Detail1;
