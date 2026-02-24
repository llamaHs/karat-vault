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
import HotItemsLayout from "./pages/HotItemsLayout";
import { ProductProvider } from "./contexts/ProductContext";
import LoadingBar from "./components/LoadingBar";
import useFakeProgress from "./hooks/useFakeProgress";

function App() {
  const { isLoading, progress, start, finish } = useFakeProgress();

  return (
    <ProductProvider>
      <BrowserRouter>
        <LoadingBar isLoading={isLoading} progress={progress} />

        <Routes>
          <Route
            path="/"
            element={<AppLayout startLoading={start} finishLoading={finish} />}
          >
            <Route index element={<Home />} />

            <Route path="hot-items" element={<HotItemsLayout />}>
              <Route index element={<HotItems />} />
              <Route path=":id" element={<Item />} />
            </Route>

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
    </ProductProvider>
  );
}

export default App;
