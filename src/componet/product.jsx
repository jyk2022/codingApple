import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Product(props) {
  const { shoes } = props;
  return (
    <Col xs={6} md={4} className="sub-img">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
      />
      <h4>상품명: {shoes.title}</h4>
      <p>상품내용: {shoes.content}</p>
      <p>상품가격:{shoes.price}</p>
    </Col>
  );
}

export default Product;
