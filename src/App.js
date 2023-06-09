import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/mainPage/mainPage";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />}>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
