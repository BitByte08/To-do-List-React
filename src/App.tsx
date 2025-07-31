import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";

function App() {
  return (
      <MainLayout>
        <Router>
          <Routes>
            <Route path="/" element={"main"} />

          </Routes>
        </Router>
      </MainLayout>
  )
}

export default App
