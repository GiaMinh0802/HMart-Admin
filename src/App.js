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
          <Route path='orders' element={<Orders />} />
          <Route path='customers' element={<Customers />} />
          <Route path='list-color' element={<ColorList />} />
          <Route path='list-category' element={<CategoryList />} />
          <Route path='list-brand' element={<BrandList />} />
          <Route path='list-product' element={<ProductList />} />
          <Route path='product' element={<AddProduct />} />
        </Route>
      </Routes>
    </Router >
  )
}

export default App
