import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CraftsByRegion from './pages/CraftsByRegion';
import RegionDetail from './pages/RegionDetail';
import CraftTechniques from './pages/CraftTechniques';
import CraftTechniqueDetail from './pages/CraftTechniqueDetail';
import CorporateGifting from './pages/CorporateGifting';
import CorporateInquiry from './pages/CorporateInquiry';
import CorporateBulkOrder from './pages/CorporateBulkOrder';
import Workshops from './pages/Workshops';
import Categories from './pages/Categories';
import CategoryDetail from './pages/CategoryDetail';
import CategoryRegionDetail from './pages/CategoryRegionDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';


function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/crafts-by-region" element={<CraftsByRegion />} />
              <Route path="/region/:regionName" element={<RegionDetail />} />
              <Route path="/craft-techniques" element={<CraftTechniques />} />
              <Route path="/craft-technique/:techniqueName" element={<CraftTechniqueDetail />} />
              <Route path="/corporate-gifting" element={<CorporateGifting />} />
              <Route path="/corporate-gifting/inquiry" element={<CorporateInquiry />} />
              <Route path="/corporate-gifting/bulk-order" element={<CorporateBulkOrder />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/category/:categoryName" element={<CategoryDetail />} />
              <Route path="/category/:categoryName/:regionName" element={<CategoryRegionDetail />} />
              <Route path="/cart" element={<Cart />} />
              
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;