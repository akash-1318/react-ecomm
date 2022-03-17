import { v4 as uuid } from "uuid";
import model1 from '../../assets/images/model1.jpg'
import model2 from '../../assets/images/modal2.jpeg'
import model3 from '../../assets/images/modal3.jpg'
import model4 from '../../assets/images/model4.jpg'

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

 export const products = [
  // {
  //   _id: uuid(),
  //   title: "You Can WIN",
  //   author: "Shiv Khera",
  //   price: "5000",
  //   categoryName: "non-fiction",
  // },
  // {
  //   _id: uuid(),
  //   title: "You are Winner",
  //   author: "Junaid Qureshi",
  //   price: "3000",
  //   categoryName: "horror",
  // },
  // {
  //   _id: uuid(),
  //   title: "Think and Grow Rich",
  //   author: "Shiv Khera",
  //   price: "1000",
  //   categoryName: "fiction",
  // },
  {
    _id: uuid(),
    title : "U.S POLO ASSN.",
    discount : "50%",
    image : model1 ,
  },
  {
    _id: uuid(),
    title : "VERA MODA",
    discount : "30%",
    image : model2 ,
  },
  {
    _id: uuid(),
    title : "JACK&JONES",
    discount : "60%",
    image : model3 ,
    blonging : true,
    collection : "Winter Collection",
    arivalText : "New Arrival",
    text : "Checkout our best winter Collection to stay hot in style this season."
  },
  {
    _id: uuid(),
    title : "TOMMY HILFIGER",
    discount : "40%",
    image : model4 ,
    blonging : true,
    collection : "Summer Collection",
    arivalText : "New Arrival",
    text : "Checkout our best summer Collection to stay cool in style this season."
  }
];

