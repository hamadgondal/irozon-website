// src/components/PageViewTracker.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // This runs every time the location (URL) changes
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
      title: document.title,
    });
  }, [location.pathname, location.search]); // Depend on the path/search change

  return null; // This component renders nothing
};

export default PageViewTracker;
