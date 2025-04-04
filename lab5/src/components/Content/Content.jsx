import Header from "../Header/Header";
import RegisterForm from "../Login/RegisterForm";
import LoginForm from "../Login/LoginForm";
import FeedbackList from "../Feedback/FeedbackList"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLoginState } from "../../hooks/useLoginState"

function Content() {
    const isAuthenticated = useLoginState();
    console.log(isAuthenticated);

    return (
        <>
            <Header />
            <Router>
                <Routes>
                    <Route path='/' element={isAuthenticated ? <FeedbackList /> : <RegisterForm />} />
                    <Route path='/login' element={<LoginForm />} />
                </Routes>
            </Router>
        </>
    )
}

export default Content