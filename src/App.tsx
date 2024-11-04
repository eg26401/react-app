import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "./pages/HomeScreen";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import ResultsPage from "./pages/ResultsPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

import SearchBar from "./components/Search";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div>
        <Header />
        <SearchBar />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="home" element={<HomeScreen />} />
            <Route path="login" element={<LogInPage />} />
            <Route path="results" element={<ResultsPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="forgottenpassword" element={<ForgotPasswordPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
