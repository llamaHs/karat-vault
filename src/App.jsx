import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import HotItems from "./pages/HotItems";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import About from "./pages/About";
import MyPage from "./pages/MyPage";
import Item from "./pages/Item";
import BuyLayout from "./pages/BuyLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="hot-items" element={<HotItems />} />

          <Route path="buy" element={<BuyLayout />}>
            <Route index element={<Buy />} />
            <Route path=":id" element={<Item />} />
          </Route>

          <Route path="sell" element={<Sell />} />
          <Route path="about" element={<About />} />
          <Route path="mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
