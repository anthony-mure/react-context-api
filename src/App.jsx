import { BrowserRouter,Routes,Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Products from "./pages/Products";
import DefaultLayout from "./layout/DefaultLayout";
import DetailProduct from "./pages/DetailProduct";
import { BudgetProvider } from "./context/BudgetContext";


function App() {
  return (
      <BudgetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/products" element={<Products />}></Route>
              <Route path="/products/:id" element={<DetailProduct />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </BudgetProvider>
  );

};

export default App
