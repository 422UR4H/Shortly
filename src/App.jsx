import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TokenProvider } from "./contexts/TokenContext.jsx";
import HomePage from "./pages/HomePage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RankingPage from "./pages/RankingPage.jsx";


function App() {
  return (
    <TokenProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/ranking" element={<RankingPage />} />
        </Routes>
      </BrowserRouter>
    </TokenProvider>
  );
}

export default App;