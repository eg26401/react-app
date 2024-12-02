import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "./pages/HomeScreen";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import ResultsPage from "./pages/ResultsPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
//import Map from "./components/Map";
import SearchBar from "./components/Search";
import Header from "./components/Header";

function HomeLayout() {
  return (
    <>
      <Header />
      <SearchBar />
      <HomeScreen />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="home" element={<HomeLayout />} />
        <Route path="login" element={<LogInPage />} />
        <Route path="results" element={<ResultsPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="forgottenpassword" element={<ForgotPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
