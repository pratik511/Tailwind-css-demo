import "./App.css";
import CardDetail from "./component/Common/CardDetail";
import Footer from "./component/footer";
import Header from "./component/header";
import Home from "./component/home";

function App() {
  return (
    <>
      <div className="relative w-full">
        <Header />
        {/* <Home /> */}
        <CardDetail />
        <Footer />
      </div>
    </>
  );
}

export default App;
