import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SubScribeNewsletter from "./components/SubScribeNewsletter";
import Navbar from "./components/navbar/Navbar";
import SubscriberList from "./pages/SubscriberList";
import Unsubscribe from "./pages/Unsubscribe";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<SubScribeNewsletter />} />
        <Route path='/subscribelist' element={<SubscriberList />} />
        <Route path='/unsubscribe' element={<Unsubscribe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
