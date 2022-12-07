import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// 라이프 사이클이란? 페이지에 장착되기도 하는 것(mount)
//가끔 업데이트도 되는 것 (update)
//필요없으면 제거되는 것(unmount)
// 컴포넌트의 인생주기를 알면 간섭이 가능함(특정 코드 실행이 가능함)

// class Detail2 extends React.Component {
//   componentDidMount() {}
//   componentDidUpdate() {}
//   componentWillUnmount() {} -> 옛날 컴포넌트 만드는 방법
// }

const YellowBtn = styled.button`
  background: ${(props) => props.bg};

  color: ${(props) => (props.bg = "blue" ? "white" : "balck")};
  padding: 10px;
`;

// let NewBtn = styled.button(YellowBtn); -> 기존의 스타일을 복사할 수 있음`
//   추가로 커스텀 할 수 있음.
// `

const BOX = styled.div`
  background: grey;
  padding: 20px;
`;

function Detail(props) {
  console.log("안녕");
  let [count, setCount] = useState(0);
  let { id } = useParams();
  let [alert, setaLert] = useState(true);

  useEffect(() => {
    //mount 및 update 할 때 실행됨.
    let a = setTimeout(() => {
      setaLert(false);
      console.log(2);
    }, 2000);
    return () => {
      console.log(1);
      clearTimeout(a); // 기존 타이머는 제거해주세요 //
      //기존 데이터 요청은 제거해주세요
    }; // clean up function
  });

  let 찾은상품 = props.shoes.find((product) => {
    return product.id == id;
  });

  return (
    <div className="container">
      {alert == true ? (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null}

      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        카운트
      </button>
      <BOX>
        <YellowBtn bg="blue">버튼</YellowBtn>
      </BOX>
      <div className="col">
        <div className="row-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100"
          />
        </div>
        <div className="row-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
export default Detail;
