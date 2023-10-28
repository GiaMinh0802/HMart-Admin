import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Forgotpassword from './pages/Forgotpassword'
import Login from './pages/Login'
import Resetpassword from './pages/Resetpassword'
import MainLayout from './components/MainLayout'
import Enquiries from './pages/Enquiries';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import ColorList from './pages/ColorList';
import CategoryList from './pages/CategoryList';
import BrandList from './pages/BrandList';
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';
import AddColor from './pages/AddColor';
import AddCategory from './pages/AddCategory';
import AddBrand from './pages/AddBrand';
import ViewEnquiry from "./pages/ViewEnquiry";
import ViewOrder from "./pages/ViewOrder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/forgot-password' element={<Forgotpassword />} />
        <Route path='/reset-password' element={<Resetpassword />} />
        <Route path='/admin' element={<MainLayout />}>
          <Route index element={<Dashboard />} />

          <Route path='enquiries' element={<Enquiries />} />
          <Route path='enquiries/:id' element={<ViewEnquiry />} />

          <Route path='orders' element={<Orders />} />
          <Route path='order/:id' element={<ViewOrder />} />

          <Route path='customers' element={<Customers />} />

          <Route path='list-color' element={<ColorList />} />
          <Route path='color' element={<AddColor />} />
          <Route path='color/:id' element={<AddColor />} />

          <Route path='list-category' element={<CategoryList />} />
          <Route path='category' element={<AddCategory />} />
          <Route path='category/:id' element={<AddCategory />} />

          <Route path='list-brand' element={<BrandList />} />
          <Route path='brand' element={<AddBrand />} />
          <Route path='brand/:id' element={<AddBrand />} />

          <Route path='list-product' element={<ProductList />} />
          <Route path='product' element={<AddProduct />} />
        </Route>
      </Routes>
    </Router >
  )
}

export default App
