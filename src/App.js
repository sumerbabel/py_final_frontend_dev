import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Header>
        <img/>
        <Nav>
          <ul>
            <li>
              <a href="/home">Homepage</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
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
