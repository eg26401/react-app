import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "./pages/HomeScreen";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import ResultsPage from "./pages/ResultsPage";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="home" element={<HomeScreen />} />
            <Route path="login" element={<LogInPage />} />
            <Route path="results" element={<ResultsPage />} />
            <Route path="signup" element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
