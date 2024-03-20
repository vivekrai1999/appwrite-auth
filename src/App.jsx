import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import UserProfile from "./pages/UserProfile";
import ContactPage from "./pages/ContactPage";
import ProtectedPath from "./utils/ProtectedPath";

function App() {
  const data = useSelector((store) => store.auth);
  console.log(data);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="register" element={<SignUpPage />}></Route>
        <Route element={<ProtectedPath />}>
          <Route path="user" element={<UserProfile />}></Route>
          <Route path="contact" element={<ContactPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
