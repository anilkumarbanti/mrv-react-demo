import React from "react";

import { useParams } from "react-router-dom";

const ProductDetails=()=>{

    const { productID } = useParams();
    return <h1>Deatils of Product {productID}</h1>

};



export default ProductDetails;