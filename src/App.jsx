import MyNav from "../src/components/MyNav";
import MyFooter from "../src/components/MyFooter";
import Welcome from "../src/components/Welcome";
import AllTheBooks from "../src/components/AllTheBooks";
import "./App.css";

function App() {
  return (
    <>
      <div className="App ">
        <MyNav className="PositionNav" />
        <Welcome />
        <header className="App-heade mx-5">
          <h1 className="text-warning bg-dark rounded text-center">Featured Products</h1>
          <AllTheBooks />
        </header>
        <MyFooter />
      </div>
    </>
  );
}

export default App;
