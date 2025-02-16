import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Characters from "./pages/characters/Characters";
import DetailCharacter from "./pages/detailCharacters/DetailCharacter";
import { useEffect, useState } from "react";
import Login from "./pages/login/login";
import Home from "./pages/home/Home";
import DefaultPage from "./pages/defaultPage/DefaultPage";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={'/home'} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/personajes" element={<Navigate to={isAuthenticated ? '/personajes/characters' : '/login'} />} />
        <Route path="/personajes/characters" element={<Characters />} />
        <Route path="/personajes/info/:characterId" element={<DetailCharacter />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<DefaultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;