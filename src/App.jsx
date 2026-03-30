import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

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
import MyPageLayout from "./pages/MyPageLayout";
import MyBids from "./pages/MyBids";
import MyListings from "./pages/MyListings";
import Wishlist from "./pages/Wishlist";
import PaymentMethods from "./pages/PaymentMethods";
import AccountSettings from "./pages/AccountSettings";

import { ProductProvider } from "./contexts/ProductContext";
import LoadingBar from "./components/LoadingBar";
import useFakeProgress from "./hooks/useFakeProgress";
import ScrollToHash from "./components/ScrollToHash";
import Careers from "./pages/Careers.JSX";
import TermsAndConditions from "./pages/TermsAndConditions";
import Privacy from "./pages/Privacy";

function App() {
  const { isLoading, progress, start, finish } = useFakeProgress();

  return (
    <ProductProvider>
      <BrowserRouter>
        <LoadingBar isLoading={isLoading} progress={progress} />
        <ScrollToHash />
        <Routes>
          <Route
            path="/"
            element={<AppLayout startLoading={start} finishLoading={finish} />}
          >
            <Route index element={<Home />} />

            <Route path="hot-items" element={<HotItemsLayout />}>
              <Route index element={<HotItems />} />
              <Route path="item/:id" element={<Item />} />
            </Route>

            <Route path="buy" element={<BuyLayout />}>
              <Route index element={<Buy />} />
              <Route path="item/:id" element={<Item />} />
            </Route>

            <Route path="item/:id" element={<Item />} />

            <Route path="sell" element={<Sell />} />
            <Route path="about" element={<About />} />

            <Route
              path="mypage"
              element={<MyPageLayout finishLoading={finish} />}
            >
              <Route index element={<Navigate to="bids" replace />} />
              <Route path="bids" element={<MyBids />} />
              <Route path="listings" element={<MyListings />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="payment-methods" element={<PaymentMethods />} />
              <Route path="account-settings" element={<AccountSettings />} />
            </Route>

            <Route path="careers" element={<Careers />} />

            <Route
              path="terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="privacy" element={<Privacy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
