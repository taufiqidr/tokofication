import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import Public from "./pages/Public";
import Users from "./pages/users/Users";
import Login from "./pages/auth/Login";
import UserDetail from "./pages/users/UserDetail";
import ProductDetail from "./pages/products/ProductDetail";
import UserNew from "./pages/users/UserNew";
import Categories from "./pages/categories/Categories";
import Products from "./pages/products/Products";
import ProductNew from "./pages/products/ProductNew";
import CategoryNew from "./pages/categories/CategoryNew";
import CategoryDetail from "./pages/categories/CategoryDetail";
import Google from "./pages/Google";
import Facebook from "./facebook/Facebook";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="product">
            <Route index element={<Products />} />
            <Route path=":id/edit" element={<ProductDetail />} />
            <Route path=":new" element={<ProductNew />} />
          </Route>
          <Route path="user">
            <Route index element={<Users />} />
            <Route path=":id/edit" element={<UserDetail />} />
            <Route path=":new" element={<UserNew />} />
          </Route>
          <Route path="category">
            <Route index element={<Categories />} />
            <Route path=":id/edit" element={<CategoryDetail />} />
            <Route path=":new" element={<CategoryNew />} />
          </Route>
        </Route>
        <Route path="google" element={<Google />}></Route>
        <Route path="facebook" element={<Facebook />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
