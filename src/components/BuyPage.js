import React , {useState, useEffect} from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import {Container, Col, Row} from "reactstrap";
import CardItem from "./CardItem.js";
import {API_URL} from "../constants"
import {CurrentDate} from "../functions";


const BuyNow = ({addInCart})=>{
   
    const [product, setProduct] = useState([]);

    //----Fetching Photos Data From API-----
    const fetchPhotos = async() => {
        const {data} = await Axios.get(API_URL);
     
        const allPhotos = data.map(item => {
        return {
            smallImage : item.cloudinaryImageId,
            tinyImage : item.cloudinaryImageId,
            productName :item.name,
            productPrice :item.price,
            id :item.id,
            quantity:1,
            initialPrice:item.price,
     }
    })
    setProduct(allPhotos)
}


    useEffect(()=>{
       fetchPhotos();
    },[]);


    return <Container fluid>
       <h4 className="text-success">{CurrentDate()}</h4>
           <h1 className="text-success text-center">POS MERCHANT</h1>
           <Row>
               {product.map(product=>(
                  <Col md={4} key={product.id}>
                      <CardItem product={product} addInCart={addInCart} ></CardItem>
                  </Col> 
               ))}
           </Row>
    </Container>
}

BuyNow.propTypes = {
    addInCart: PropTypes.func,
};
  
export default BuyNow;