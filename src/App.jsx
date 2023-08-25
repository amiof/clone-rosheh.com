import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <div>
        <Modal/>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route  path="/*" element={<Navigate to="/notfound"/>} />
          </Routes>
        </Layout>
      </div>
    </>
  );
}

export default App;
