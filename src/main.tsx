// src/main.tsx

// Changed from 'react-dom/client' to 'react-dom/client' for modern usage
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

// Check if the root container is empty (standard client-side render)
// or if it has content (pre-rendered by React Snap)
if (container.hasChildNodes()) {
  // If content exists (pre-rendered), use hydrateRoot to attach events
  // (This is what runs when a bot or user loads the pre-rendered HTML)
  hydrateRoot(container, <App />);
} else {
  // If content is empty (standard development/initial load), use createRoot
  createRoot(container).render(<App />);
}
