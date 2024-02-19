import "./App.css";
import ProductCardContainer from "./components/ProductCardContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
function App() {
  return (
    <main className="store">
      <NavBar />
      <ProductCardContainer />
      <Footer />
    </main>
  );
}

export default App;
