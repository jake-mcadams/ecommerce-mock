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

  return (
    <div className="itemgallery__image_gallery_container">
      <FocusImage focus_image={product1} id="focus_image" />
      {/* {thumbnailImages.map((preImage) => {
        return <ProductPreview id={`previewImage${preImage.indexOf(preImage)}`} preview={preImage}/>;
      })} */}
      <div id="thumbnail_one_container" >
        <img id="thumbnail_one" className="itemgallery__other_images" src={product1Thumb} alt="" />
      </div>
      <div id="thumbnail_two_container">
        <img id="thumbnail_two" className="itemgallery__other_images" src={product2Thumb} alt="" />
      </div>
      <div id="thumbnail_three_container">
        <img id="thumbnail_three" className="itemgallery__other_images" src={product3Thumb} alt="" />
      </div>
      <div id="thumbnail_four_container">
        <img id="thumbnail_four" className="itemgallery__other_images" src={product4Thumb} alt="" />
      </div>
    </div>
  );
};

export default ItemGallery;
