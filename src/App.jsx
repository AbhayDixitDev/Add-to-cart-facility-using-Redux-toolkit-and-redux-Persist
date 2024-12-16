import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout"
import Home from "./Pages/home"
import Desktop from "./Pages/desktop"
import Laptop from "./Pages/laptop"
import Mobile from "./Pages/mobile"
import Cart from "./Pages/cart"

const App=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/desktop" element={<Desktop />} />
          <Route path="/laptop" element={<Laptop />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App