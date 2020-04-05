import React from "react";
import { Link } from "react-router-dom";

const productItem = (props) => {
  //   const value = props.location.state.prodact;
  const path = props.location.state.order.productData;

  //   const fetchedOrders = [];
  //   for (let key in props.location.state) {
  //     fetchedOrders.push({
  //       ...props.location.state[key],
  //       //id: key,
  //     });
  //   }
  //console.log("array", fetchedOrders);
  //   let productDetaile = fetchedOrders.map((product) => {
  //  console.log("map product.productData.tiile", product.productData.tiile);
  //  console.log("map product", product);
  //  console.log("map product title", product.title);
  //  const producttArr = [];
  //  for (let key in product) {
  //    producttArr.push({
  //      ...product[key],
  //      //id: key,
  //    });
  //  }
  //  let productt = producttArr.map((prod) => {
  //    console.log("prod", prod);
  //  });
  //  <div>
  //    <div>{product.productData.productData.title}</div>
  //    <div>{product.productData.description}</div>
  //  </div>;
  //   });

  return (
    <div>
      <div>
        <div>{path.title}</div>
        <div>{path.location}</div>
        <div>{path.description}</div>
        <div>{path.price}</div>
        <div>{path.price}</div>
      </div>
      <div>
        <Link to="/">Back</Link>
      </div>
    </div>
  );
};

export default productItem;
