import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
//import { HashLink } from "react-router-hash-link";
function App() {
  return (
    <>
      <Header>
        <Nav >
          <ul>
            <li> <img src='/logo.svg' alt="Little Lemon Logo" /> </li>
            <li>ITEM 1</li>
            <li>ITEM 1</li>
            <li>ITEM 1</li>
            <li>ITEM 1</li>
            {/* <li> <HashLink to="/">Home</HashLink> </li> */}
          {/* <li> <HashLink to="/#about">About</HashLink> </li>
          <li> <HashLink to="/#menu">Menu</HashLink> </li>
          <li> <HashLink to="/bookings">Reservations</HashLink> </li>
          <li className="orderBtn"> <HashLink role="button" to="#">Order Online</HashLink> </li> */}
          <li> <img className="basketIcon" src='/basket.svg' alt="Basket" /> </li>
          </ul>
        </Nav>
      </Header>
      <Main>

      </Main>
      <Footer>

      </Footer>
    </>
  );
}

export default App;
