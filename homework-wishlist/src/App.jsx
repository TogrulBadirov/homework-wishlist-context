import "./App.css";
import WishlistProvider from "./context/WishlistContext";
import Category from "./pages/Category";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import WishList from "./pages/WishList";

function App() {
  return (
    <>
      <WishlistProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Category />} />
              <Route path="wishlist" element={<WishList />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </WishlistProvider>
    </>
  );
}

export default App;
