import { useCallback, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function DeleteUser() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {
      setData(res.data);
    });
  }, []);

  const navigate = useNavigate();

  const onSubmit = useCallback(
    (data) => {
      axios.delete("http://localhost:3000/users/" + data.id).then((res) => {
        alert("Удалено");
        navigate("/admin/users");
      });
    },
    [navigate]
  );

  if (data) {
    return (
      <Container className="form__container w-25 mt-3">
        <h3>Удаление пользователя</h3>
        <Form onSubmit={handleSubmit(onSubmit)} className="border p-3 rounded">
          <Form.Group className="mb-3 d-flex flex-column" controlId="1">
            <Form.Label className="fs-5">Логин</Form.Label>
            <Form.Select
              {...register("id")}
              aria-label="Default select example"
            >
              {data.map((el) => {
                return <option value={el.id}>{el.login}</option>;
              })}
            </Form.Select>
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className=""
            onClick={() => onSubmit}
          >
            Удалить
          </Button>
        </Form>
      </Container>
    );
  }
  return <></>;
}

export default DeleteUser;
