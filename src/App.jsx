import React, { createContext, useEffect, useState } from "react";
import Home from "./Pages/Home";
import "./app.css";
import { AppSettingProvider } from "./context/ThemeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivacyPolicyPage from "./Pages/PrivacyPolicyPage";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "Policy", element: <PrivacyPolicyPage /> },
  // { path: "*", element: <NotFound /> },
]);

const App = () => {
  const [Governate, setGovernate] = useState("رفحاء");

  // Load appSetting from local storage or use default values
  const loadAppSetting = () => {
    const savedSettings = localStorage.getItem("appSetting");
    return savedSettings ? JSON.parse(savedSettings) : { IsDark: false, Language: "ar", Governate: "رفحاء" };
  };

  const [appSetting, setAppSetting] = useState(loadAppSetting);

  // Fetch user's location and update Governate
  useEffect(() => {
    fetch("https://api.geoapify.com/v1/ipinfo?apiKey=e95bb2717c9e4352bfb8210cf768755d")
      .then((response) => response.json())
      .then((data) => {
        const cityName = data.city?.name || "رفحاء";
        setGovernate(cityName);
      });
  }, []);

  // Update appSetting when Governate changes
  useEffect(() => {
    setAppSetting((prev) => ({ ...prev, Governate }));
  }, [Governate]);

  // Save appSetting to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("appSetting", JSON.stringify(appSetting));
  }, [appSetting]);

  return (
    <AppSettingProvider value={{ appSetting, setAppSetting }}>
      <RouterProvider router={router} />
    </AppSettingProvider>
  );
};

export default App;
