import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Header from "./header.jsx";
import MainContent from "./maincontent.jsx";
import Footer from "./footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Header />
    <MainContent />
    <Footer />
  </StrictMode>
);
