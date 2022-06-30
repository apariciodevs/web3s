import Navbar from "./Navbar";
import Footer from "./Footer";

//styles
import lytStyles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={lytStyles.layoutDisplay}>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
