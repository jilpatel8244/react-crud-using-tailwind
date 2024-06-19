import { Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import Page404 from "./components/Page404"
import Layout from "./components/Layout"
import Product from "./components/product"

function App() {

  return (
    <>
      <Routes>
        <Route path="/">
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/products" element={<Layout />} >
          <Route path="product-list" element={<Product />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App
