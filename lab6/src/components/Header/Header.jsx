import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import { useLoginState } from "../../hooks/useLoginState"
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

function Header() {
    const username = useSelector((state) => state.username);
    const isAuthenticated = useLoginState();
    const dispatch = useDispatch();
    
    return (
        <header className="bg-dark text-white py-2">
            <Container className="w-50 d-flex align-items-center">
                <h1 className="me-auto">Лабораторная работа 6</h1>
                <p className="m-0 me-2">{isAuthenticated ? <Link to="/profile">Пользователь: {username}</Link> : <></>}</p>
                {isAuthenticated ? <Link to="/" className="m-0 text-danger" onClick={() => dispatch({ type: 'LOGOUT' })}>Выйти</Link> : <></>}
            </Container>
        </header>
    )
}

export default Header