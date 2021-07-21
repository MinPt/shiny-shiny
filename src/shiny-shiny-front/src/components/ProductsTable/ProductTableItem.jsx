import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { removeProduct } from "../../store/productSlice";

const ProductTableItem = ({ product, index }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{index}</td>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.price}$</td>
      <td className="text-center">
        <Button>Edit product</Button>
      </td>
      <td className="text-center">
        <Button
          onClick={() => {
            dispatch(removeProduct(product._id));
          }}
          variant="danger"
        >
          Delete product
        </Button>
      </td>
    </tr>
  );
};

export default ProductTableItem;
