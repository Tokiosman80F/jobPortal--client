import { Outlet } from "react-router-dom";
import Header from "../../Pages/shared/Header/Header";
import Footer from "../../Pages/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <div className="min-h-[85vh]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
