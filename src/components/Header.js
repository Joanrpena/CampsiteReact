import { Navbar, NavbarBrand } from "reactstrap";
import NUCAMPLOGO from "../app/assets/img/logo.png";

const Header = () => {
  return (
    <Navbar dark color="primary" sticky="top" expand="md">
      <NavbarBrand href="/">
        <img src={NUCAMPLOGO} alt="nucamp logo" />
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
