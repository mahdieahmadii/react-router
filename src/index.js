import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Books from "./Components/Books";
import Book from "./Components/Book";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  کتاب مورد نظر خود را انتخاب نمایید
                </main>
              }
            />
            <Route path=":bookId" element={<Book />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>صفحه مورد نظر پیدا نشد</main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
