import { useState, useEffect, useCallback } from "react"
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import axios from "axios";
import { useForm } from "react-hook-form";

function Profile() {
    const username = useSelector((state) => state.username);
    const [profile, setProfile] = useState({})

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        axios.get("http://localhost:3000/profile/" + username).then(res => {
            setProfile(res.data)
        })
    }, [username])

    if (!profile) {
        return (
            <h2>Загрузка</h2>
        )
    }

    const onSubmit = useCallback((data) => {
        data["id"] = profile["id"]
        axios.put("http://localhost:3000/profile", { ...data }).then(res => {
            alert("Изменено")
        }
        )
    }, [profile])

    return (
        <Container className="list__container w-50">
            <h2>Профиль</h2>
            <Form onSubmit={handleSubmit(onSubmit)} className="border p-3 rounded">
                <Form.Group className="mb-3 d-flex flex-column" controlId="1">
                    <Form.Label className="fs-5">Логин</Form.Label>
                    <Form.Control defaultValue={profile.login} type="username" {...register("username", { required: true })} className="text-muted" placeholder="Введите логин" />
                </Form.Group>
                {errors.username && <p>This field is required</p>}

                <Form.Group className="mb-3 d-flex flex-column" controlId="3">
                    <Form.Label className="fs-5">Пароль</Form.Label>
                    <Form.Control
                        {...register("password", { required: true })}
                        defaultValue={profile.password}
                        className="text-muted"
                        placeholder="Введите пароль"
                    />
                </Form.Group>
                {errors.password && <p>This field is required</p>}

                <Button variant="primary" type="submit" className="" onClick={() => onSubmit}>
                    Изменить
                </Button>
            </Form>

        </Container>
    )
}

export default Profile