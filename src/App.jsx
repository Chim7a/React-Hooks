import { Routes, Route } from "react-router";
import MarketPlace from "./pages/MarketPlace";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Welcome</h1>} />
      <Route path="/marketplace" element={<MarketPlace />} />
    </Routes>
  );
}

export default App;
