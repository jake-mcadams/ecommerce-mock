// import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import ItemGallery from "./components/ItemGallery";
import Item from "./components/Item";

function App() {
  
  // creating products variable to store product info. Production would be taken from table
  const product =[
    {
      id: 1,
      companyTitle: "Sneaker Company",
      productTitle: "Fall Limited Edition Sneakers",
      productDesc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      originalPrice: "250.00",
      discountPrice: "125.00",
    }
  ]

  
  return (
    <div id="app_container">
      <Navigation></Navigation>
      <div className="app__gallery_checout_container">
        <ItemGallery />
        <Item products={product[0]}></Item>
        {/* <div id="testing">
          <h1>
          {product.companyTitle}
          </h1>
           Fall Limited Edition Sneakers These low-profile
          sneakers are your perfect casual wear companion. Featuring a durable
          rubber outer sole, they’ll withstand everything the weather can offer.
          $125.00 50% $250.00 0 Add to cart
        </div> */}
      </div>
    </div>
  );
}

export default App;
