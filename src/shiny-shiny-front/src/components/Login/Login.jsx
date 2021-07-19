import { useFormik } from "formik";
import * as yup from "yup";
import { Form, Button, Container, InputGroup } from "react-bootstrap";
import UserApi from "../../services/eneties/user";
import { withRouter } from "react-router-dom";

const schema = yup.object({
  email: yup
    .string("Enter email")
    .email("Email must be valid")
    .max(255)
    .required("Email is required"),
  password: yup
    .string("Enter password")
    .min(5)
    .max(255)
    .required("Password is required"),
});

const Login = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      console.log(values);
      const token = await UserApi.authUser(values);
      localStorage.setItem("jwtToken", token);
      props.history.push("/products");
    },
  });

  return (
    <Container>
      <Form
        noValidate
        className="border px-5 py-4 my-5"
        onSubmit={formik.handleSubmit}
      >
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control
              value={formik.values.email}
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              value={formik.values.password}
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.password}
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default withRouter(Login);
