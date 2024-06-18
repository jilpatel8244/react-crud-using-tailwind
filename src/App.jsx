import { Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import ProductList from "./components/ProductList"
import Page404 from "./components/Page404"

function App() {

  return (
    <>
      <Routes>
        <Route path="/">
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/products">
          <Route path="product-list" element={<ProductList />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App
