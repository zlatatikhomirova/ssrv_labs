import Header from "../Header/Header";
import RegisterForm from "../Login/RegisterForm";
import LoginForm from "../Login/LoginForm";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import FeedbackList from "../Feedback/FeedbackList";
import About from "../About/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLoginState } from "../../hooks/useLoginState";

function Content() {
  const isAuthenticated = useLoginState();

  return (
    <>
      <Router>
        <Header />
        <div className="mt-4 flex-grow-1">
          <Routes>
            <Route
              path="/"
              element={isAuthenticated ? <FeedbackList /> : <RegisterForm />}
            />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about_me" element={<About />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </>
  );
}

export default Content;
