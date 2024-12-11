import { Routes, Route } from "react-router";
import MarketPlace from "./pages/MarketPlace";
import About from "./pages/About";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/Dashboard";
import AccountSettings from "./pages/Account-settings";
import PetDetails from "./pages/PetDetails";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/marketplace">
          <Route index element={<MarketPlace />} />
          {/* example of dynamic routing */}
          <Route path=":pet_id" element={<PetDetails />} />
        </Route>

        {/* Examples of nested route */}
        <Route path="dashboard">
          <Route index element={<Dashboard />} />
          {/* this route is nested withing the dashboard */}
          <Route path="setting" element={<AccountSettings />} />
        </Route>
      </Route>

      {/* to handle all routes that do not exist in the application */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
