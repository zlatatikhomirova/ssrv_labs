import Header from "../Header/Header";
import RegisterForm from "../Login/RegisterForm";
import LoginForm from "../Login/LoginForm";
import Profile from "../Profile/Profile"
import FeedbackList from "../Feedback/FeedbackList"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLoginState } from "../../hooks/useLoginState"

function Content() {
    const isAuthenticated = useLoginState();

    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={isAuthenticated ? <FeedbackList /> : <RegisterForm />} />
                    <Route path='/login' element={<LoginForm />} />
                    <Route path='/profile' element={<Profile />} />
                </Routes>
            </Router>
        </>
    )
}

export default Content