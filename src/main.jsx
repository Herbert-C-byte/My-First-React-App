import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./header.jsx";
import MainMain from "./mainmain.jsx";
import Footer from "./footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Header />
    <MainMain />
    <Footer />
  </StrictMode>
);
