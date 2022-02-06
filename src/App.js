// import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import ItemGallery from "./components/ItemGallery";


function App() {
  return (
    <div className="app_container">
      <Navigation></Navigation>
      <ItemGallery/>
    </div>
  );
}

export default App;
