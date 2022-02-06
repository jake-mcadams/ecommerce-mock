import React from "react";

const ProductPreview=(props)=>{
    return (
        <img id={props.id} src={props.preview} alt="" />
    )
}

export default ProductPreview;