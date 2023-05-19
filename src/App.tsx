import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import Header from "./components/ui/Header";

function App() {
  return (
    <>
      <Header />
      <main className="w-full max-w-screen-sm mx-auto flex flex-col gap-2 text-center">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about/" element={<AboutPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
