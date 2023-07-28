import { Outlet } from "react-router-dom";
import { Navbar, Button, Footer } from "../components";

const Layouts = () => {
  return (
    <div className="bg-gray-900 flex flex-col min-h-screen justify-between">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layouts;
