import React from "react";
import PropTypes from "prop-types";
import {Card, CardBody, CardText, CardTitle, CardImg, Button} from "reactstrap";


const CardItem= ({product, addInCart})=>{
   return(
         <Card className="mt-2 mb-1 cardStyle shadow-lg bg-white rounded" >
             <CardImg top height="250" width="100%" src={product.smallImage}/>
             <CardBody className="text-center">
                 <CardTitle>{product.productName}</CardTitle>
                 <CardText className="secondary">Price : Rs. {product.initialPrice}</CardText>
                    <Button color="success" onClick={()=>addInCart(product)}>Buy Now</Button>
             </CardBody>
         </Card>
   )
}

CardItem.propTypes = {
    addInCart: PropTypes.func,
    product:PropTypes.object
};

export default CardItem;