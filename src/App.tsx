import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import HomeScreen from "./pages/HomeScreen";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import ResultsPage from "./pages/ResultsPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import AboutPage from "./pages/AboutPage";
//import Map from "./components/Map";
import SearchBar from "./components/Search";
import Header from "./components/Header";
import ResultsDisplay from "./components/ResultsDisplay";
import Footer from "./components/Footer.tsx";
import WonkyBoxes from "./components/WonkyBoxes";
import Info from "./components/Info.tsx";

const exampleRoute = {
  from: "Oxford Circus",
  to: "Victoria",
  via: ["Green Park"],
  duration: "12 minutes",
  segments: [
    {
      lineName: "Bakerloo Line",
      color: "#894e24",
      from: "Oxford Circus",
      to: "Piccadilly Circus",
      stops: ["Oxford Circus", "Piccadilly Circus"],
    },
    {
      lineName: "Piccadilly Line",
      color: "#003688",
      from: "Piccadilly Circus",
      to: "Green Park",
      stops: ["Piccadilly Circus", "Green Park"],
    },
    {
      lineName: "Victoria Line",
      color: "#0098d4",
      from: "Green Park",
      to: "Victoria",
      stops: ["Green Park", "Victoria"],
    },
  ],
};

function HomeLayout() {
  return (
    <>
      <Header />
      <HomeScreen />
      <Info />
      <WonkyBoxes />
      <Footer />
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
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
