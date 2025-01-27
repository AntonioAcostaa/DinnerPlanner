import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@intility/bifrost-react/bifrost-app.css";
import Navigation from "./navigation/navigation.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navigation />
  </StrictMode>,
);
