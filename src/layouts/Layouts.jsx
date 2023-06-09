import { Outlet } from "react-router-dom";
import { Navbar, Button, Footer } from "../components";

const Layouts = () => {
  return (
    <div className="min-h-screen flex justify-between flex-col bg-gray-900">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layouts;
