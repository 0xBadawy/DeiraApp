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

  useEffect(() => {
    fetch("https://api.geoapify.com/v1/ipinfo?apiKey=e95bb2717c9e4352bfb8210cf768755d")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.city.name);
        setGovernate(data.city.name);
      });
  }, []);

  const [appSetting, setAppSetting] = useState({ IsDark: false, Language: "ar", Governate });

  // Update appSetting whenever Governate changes
  useEffect(() => {
    setAppSetting((prev) => ({ ...prev, Governate }));
  }, [Governate]);

  return (
    <AppSettingProvider value={{ appSetting, setAppSetting }}>
      <RouterProvider router={router} />
    </AppSettingProvider>
  );
};

export default App;
