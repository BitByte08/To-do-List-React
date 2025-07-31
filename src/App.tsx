import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import Home from "@/pages/Home.tsx";
function App() {
  return (
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
  )
}

export default App
