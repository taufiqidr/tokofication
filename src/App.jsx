import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Public from "./pages/Public";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="category" element={<Category />}></Route>
        <Route path="home" element={<Home />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
