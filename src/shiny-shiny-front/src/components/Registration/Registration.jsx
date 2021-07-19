import { useFormik } from "formik";
import * as yup from "yup";
import { Form, Button, Container, InputGroup } from "react-bootstrap";
import UserApi from "../../services/eneties/user";

const schema = yup.object({
  email: yup
    .string("Enter email")
    .email("Email must be valid")
    .max(255)
    .required("Email is required"),
  name: yup.string("Enter name").min(4).max(25).required("Name required"),
  password: yup
    .string("Enter password")
    .min(5)
    .max(255)
    .required("Password is required"),
});

const Registration = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      const data = await UserApi.createUser(values);
      localStorage.setItem("jwtToken", data.jwtToken);
    },
  });

  return (
    <Container>
      <Form
        noValidate
        className="border px-5 py-4 my-5"
        onSubmit={formik.handleSubmit}
      >
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              value={formik.values.name}
              name="name"
              type="text"
              placeholder="Enter name"
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.name}
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
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

export default Registration;
