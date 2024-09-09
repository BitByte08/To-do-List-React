import './style/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Dashboard from './pages/main';

function App() {
  let userName = "hello";
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard userName={userName} />}></Route>
        <Route path="*" element={<>error</>}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
