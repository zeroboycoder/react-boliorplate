import { Routes, Route } from "react-router-dom";
import Layout from "./hoc/layout";
import LoginPage from "./pages/loginPage";
import HomePage from "./pages/homePage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/login" element=<LoginPage /> />
        <Route path="/" exact element=<HomePage /> />
      </Routes>
    </Layout>
  );
};

export default App;
