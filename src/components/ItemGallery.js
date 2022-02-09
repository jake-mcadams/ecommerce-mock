import { React, useState } from "react";
import FocusImage from "../shared/UIElements/FocusImage";
import ProductPreview from "../shared/UIElements/ProductPreview";
import "../styles/components/ItemGallery.css";
import product1 from "../images/image-product-1.jpg";
import product1Thumb from "../images/image-product-1-thumbnail.jpg";
import product2 from "../images/image-product-2.jpg";
import product2Thumb from "../images/image-product-2-thumbnail.jpg";
import product3 from "../images/image-product-3.jpg";
import product3Thumb from "../images/image-product-3-thumbnail.jpg";
import product4 from "../images/image-product-4.jpg";
import product4Thumb from "../images/image-product-4-thumbnail.jpg";

const focusImageList = [
  "../images/image-product-1.jpg",
  "../images/image-product-2.jpg",
  "../images/image-product-3.jpg",
  "../images/image-product-4.jpg",
];

const thumbnailImages = [
  "../images/image-product-1-thumbnail.jpg",
  "../images/image-product-2-thumbnail.jpg",
  "../images/image-product-3-thumbnail.jpg",
  "../images/image-product-4-thumbnail.jpg",
];

const ItemGallery = (props) => {
  const [productImage, setProductImage] = useState(product1);

  //since images are loaded locally creating individual onclick handler. production would be one handler loading src from table.

  const thumbOneClickHandler=()=>{
    setProductImage(product1)
  }
  const thumbTwoClickHandler=()=>{
    setProductImage(product2)
  }
  const thumbThreeClickHandler=()=>{
    setProductImage(product3)
  }
  const thumbFourClickHandler=()=>{
    setProductImage(product4)
  }

  return (
    <div className="itemgallery__app_container">
      <div className="itemgallery__image_gallery_container">
        <FocusImage focus_image={productImage} id="focus_image" />
        {/* {thumbnailImages.map((preImage) => {
        return <ProductPreview id={`previewImage${preImage.indexOf(preImage)}`} preview={preImage}/>;
      })} */}
        <div id="preview_container">
          <div className="thumbnail_container">
            <img
              id="thumbnail_one"
              className="itemgallery__other_images"
              src={product1Thumb}
              alt=""
              onClick={thumbOneClickHandler}
            />
          </div>
          <div className="thumbnail_container">
            <img
              id="thumbnail_two"
              className="itemgallery__other_images"
              src={product2Thumb}
              alt=""
              onClick={thumbTwoClickHandler}
            />
          </div>
          <div className="thumbnail_container">
            <img
              id="thumbnail_three"
              className="itemgallery__other_images"
              src={product3Thumb}
              alt=""
              onClick={thumbThreeClickHandler}
            />
          </div>
          <div className="thumbnail_container">
            <img
              id="thumbnail_four"
              className="itemgallery__other_images"
              src={product4Thumb}
              alt=""
              onClick={thumbFourClickHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemGallery;
