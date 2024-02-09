import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import BookOrderList from "./pages/OrderList";

function App() {
  return (
    <div className="App">
      <Header title={"Book Store"}></Header>
      {/* <Home></Home> */}
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="orders" element={<BookOrderList />} />

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
