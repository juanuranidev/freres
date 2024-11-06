import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./Context/CartContext";
import { getFirestoreApp } from "./Config/Firebase/FirebaseConfig";
import "./Assets/Styles/Base.scss";

const Main = React.lazy(() => import("./Views/Main/Main"));
const Shop = React.lazy(() => import("./Views/Shop/Shop"));
const About = React.lazy(() => import("./Views/About/About"));
const Footer = React.lazy(() => import("./Layout/Footer/Footer"));
const Navbar = React.lazy(() => import("./Layout/Navbar/Navbar"));
const Checkout = React.lazy(() => import("./Views/Checkout/Checkout"));
const NotFound = React.lazy(() => import("./Views/NotFound/NotFound"));
const ScrollToTop = React.lazy(
  () => import("./Components/ScrollToTop/ScrollToTop")
);
const ProductDetail = React.lazy(
  () => import("./Views/ProductDetail/ProductDetail")
);
const SecretDiscount = React.lazy(
  () => import("./Views/SecretDiscount/SecretDiscount")
);
const BuildYourOutfit = React.lazy(
  () => import("./Views/BuildYourOutfit/BuildYourOutfit")
);
const EssentialOutfits = React.lazy(
  () => import("./Views/EssentialOutfits/EssentialOutfits")
);
const EssentialOutfitDetail = React.lazy(
  () => import("./Views/EssentialOutfitDetail/EssentialOutfitDetail")
);

getFirestoreApp();

function App() {
  return (
    <Suspense fallback={null}>
      <CartContextProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/shop/:idCategory" element={<Shop />} />
            <Route path="/essential_outfits" element={<EssentialOutfits />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route
              path="/outfit/:idOutfit"
              element={<EssentialOutfitDetail />}
            />
            <Route path="/build-your-outfit" element={<BuildYourOutfit />} />
            <Route path="/secret" element={<SecretDiscount />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </Suspense>
  );
}

export default App;
