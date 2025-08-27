import "./App.css";
import ThemeProvider from "./contexts/ThemeProvider";
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home/Home";
import ProductsPage from "./pages/ProductsPage/ProductsPage"
import Profile from "./pages/Profile/Profile"

const App = () => {

  return (
    <ThemeProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<ProductsPage />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
