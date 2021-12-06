import { BrowserRouter, Routes, Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import NavBar from "./components/NavBar";

import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";

toast.configure();

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
