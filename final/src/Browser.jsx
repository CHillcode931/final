import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import { Details } from "./components/Details";
import { App } from "./App";

export const Browser = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route element={<Home />} path="/home" />

          <Route element={<Details />} path="details/:id" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
