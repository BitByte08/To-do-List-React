import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import Home from "@/pages/Home.tsx";
function App() {
  return (
      <MainLayout>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </MainLayout>
  )
}

export default App
