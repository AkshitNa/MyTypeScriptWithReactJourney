import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import CounterProvider from "./Context/CounterProvider.tsx";

const x = document.getElementById("root");

createRoot(x!).render(
  <CounterProvider>
    <App />
  </CounterProvider>
);
