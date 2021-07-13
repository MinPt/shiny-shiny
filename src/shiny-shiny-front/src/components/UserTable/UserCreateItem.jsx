import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createUser } from "../../store/userSlice";

const UserCreateItem = ({ toggleCreation, index }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{index}</td>
      <td>
        <Form.Control
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Name"
        />
      </td>
      <td>
        <Form.Control
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          placeholder="Name"
        />
      </td>
      <td>
        <Button
          onClick={() => {
            const user = {
              name,
              email,
            };
            dispatch(createUser(user));
          }}
        >
          Save user
        </Button>
      </td>
      <td>
        <Button onClick={() => toggleCreation()} variant="danger">
          Remove
        </Button>
      </td>
    </tr>
  );
};

export default UserCreateItem;
