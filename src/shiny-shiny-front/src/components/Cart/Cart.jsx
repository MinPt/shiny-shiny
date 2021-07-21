import { Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalSum } from "../../store/productCartSlice";
import CartItem from "./CartItem";

const Cart = () => {
  const products = useSelector((state) => state.productCart);
  const dispatch = useDispatch();
  const totalSum = useSelector((state) => {
    return state.productCart.reduce((subtotal, item) => {
      return (subtotal += item.count * item.price);
    }, 0);
  });
  return (
    <Container className="text-center my-5 ">
      <Row className=" justify-content-center">
        <Col className="col-6">
          {products.length > 0 ? (
            <Table>
              <thead>
                <tr className="">
                  <th className="col-1">#</th>
                  <th className="col-1">Name</th>
                  <th className="col-1">Count</th>
                  <th className="col-3"></th>
                  <th className="col-3"></th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, index) => (
                  <CartItem key={index} index={index} product={item} />
                ))}
              </tbody>
            </Table>
          ) : (
            <h1>Cart is Empty</h1>
          )}
        </Col>
      </Row>
      <Row>
        <h2>Total sum is: {totalSum}$</h2>
      </Row>
    </Container>
  );
};

export default Cart;
