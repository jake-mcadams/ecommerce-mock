// import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import ItemGallery from "./components/ItemGallery";
import Item from "./components/Item";

function App() {
  // creating products variable to store product info. Production would be taken from table
  const product = [
    {
      id: 1,
      companyTitle: "Sneaker Company",
      productTitle: "Fall Limited Edition Sneakers",
      productDesc:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      originalPrice: "250.00",
      discountPrice: "125.00",
    },
  ];

  return (
    <div id="app_container">
      <Navigation></Navigation>
    <div id="app__main_container">
    <div id="app__gallery_container" className="app__positioning">
        <ItemGallery />
      </div>
      <div id="app_checkout_container" className="app__positioning">
        <Item products={product[0]}></Item>
      </div>
    </div>
    </div>
  );
}

export default App;
