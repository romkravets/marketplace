import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//import axios from "../../axios-orders";
import { connect } from "react-redux";
import classes from "./Home.css";
//import Prodacts from "../../components/Prodacts/Products";
import Card from "../../components/Card/Card";
//import Currency from "../../components/Currency/Currency";
//import Search from "../../components/Search/Search";
import Spinner from "../../components/UI/Spinner/Spinner";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import * as actions from "../../store/actions/index";

const home = (props) => {
  // state = {
  //   //products: [],
  //   //loading: true,
  //   selectedPostId: null,
  //   //error: false,
  //   query: "",
  //   filteredData: [],
  //   queryError: true,
  // };
  // const [productsState, setProductsState] = useState([]);
  // const [error, setError] = useState(false);
  // const [selectedPostId, setSelectedPostId] = useState(null);

  // useEffect(() => {
  //   const { onFetchProducts } = props;
  //   onFetchProducts();
  // }, [onFetchProducts]);

  const { onFetchProducts } = props;
  useEffect(() => {
    onFetchProducts();
  }, [onFetchProducts]);

  //   // axios
  //   //   .get("https://marketplace-91001.firebaseio.com/product.json")
  //   //   .then((res) => {
  //   //     const fetchProduct = [];
  //   //     for (let key in res.data) {
  //   //       fetchProduct.push({
  //   //         ...res.data[key],
  //   //         id: key,
  //   //       });
  //   //     }
  //   //     this.setState({ loading: false, products: fetchProduct });
  //   //     this.setState({ queryError: true });
  //   //   })
  //   //   .catch((error) => {
  //   //     // console.log(error);
  //   //     this.setState({ loading: false });
  //   //   });

  //   // handleInputChange = (event) => {
  //   //   const query = event.target.value;

  //   //   this.setState((prevState) => {
  //   //     const filteredData = prevState.data.filter((element) => {
  //   //       return element.title.toLowerCase().includes(query.toLowerCase());
  //   //     });

  //   //     return {
  //   //       query,
  //   //       filteredData,
  //   //     };
  //   //   });
  //   //   this.setState({ queryError: false });
  //   // };

  //   // componentWillMount() {
  //   //   this.getData();
  //   // }

  //   // getData = () => {
  //   //   axios
  //   //     .get("https://marketplace-91001.firebaseio.com/product.json")
  //   //     .then((res) => {
  //   //       const fetchProduct = [];
  //   //       for (let key in res.data) {
  //   //         fetchProduct.push({
  //   //           ...res.data[key],
  //   //           id: key,
  //   //         });
  //   //         const { query } = this.state;
  //   //         const filteredData = fetchProduct.filter((element) => {
  //   //           return element.title.toLowerCase().includes(query.toLowerCase());
  //   //         });
  //   //         this.setState({ loading: false, data: filteredData });
  //   //         // console.log(this.state.data);
  //   //       }
  //   //     })
  //   //     .catch((error) => {
  //   //       this.setState({ loading: false });
  //   //     });
  //   // };

  //   // postSelectedHandler = (id) => {
  //   //   const prodIndex = this.state.products.findIndex((p) => p.id === id);
  //   //   console.log(this.state.products[prodIndex].favorite);
  //   //   console.log("prodIndex", prodIndex);
  //   //   const newFavStatus = !this.state.products[prodIndex].favorite;
  //   //   console.log("newFavStatus", newFavStatus);
  //   //   const updatedProducts = [...this.state.products];
  //   //   updatedProducts[prodIndex] = {
  //   //     ...this.state.products[prodIndex],
  //   //     favorite: newFavStatus,
  //   //   };
  //   //   console.log(updatedProducts);
  //   //   return {
  //   //     ...this.state,
  //   //     products: updatedProducts,
  //   //   };
  //   // };
  //   // let block = null;
  //   // block = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
  //   // if (!props.loading) {
  //   //   block = (
  //   //     <div className={classes.Prodact}>
  //   {
  //     /* {this.props.products.map((poroduct) => (
  //             <Card
  //               key={poroduct.id}
  //               title={poroduct.title}
  //               image={poroduct.image}
  //               favorite={poroduct.favorite}
  //               price={poroduct.price}
  //               author={poroduct.author}
  //               clicked={() => this.postSelectedHandler(poroduct.id)}
  //             />
  //           ))} */
  //   }
  //   // </div>
  //   //   );
  //   // }

  //   // if (!this.state.queryError) {
  //   //   block = (
  //   //     <div className={classes.Prodact}>
  //   //       {this.state.filteredData.map((i) => (
  //   //         <Card
  //   //           key={i.id}
  //   //           title={i.title}
  //   //           image={i.image}
  //   //           price={i.price}
  //   //           author={i.author}
  //   //           // clicked={() => this.postSelectedHandler(i.id)}
  //   //         />
  //   //       ))}
  //   //     </div>
  //   //   );
  //   // }
  //   let products = null;
  //   // if (!props.loading) {
  //   console.log(props.products);
  //   products = props.products.map((product) => {
  //     // console.log(product);
  //     // console.log(product.image);
  //     <Card
  //       key={product.id}
  //       title={product.title}
  //       image={product.image}
  //       favorite={product.favorite}
  //       price={product.price}
  //       author={product.author}
  //       clicked={() => this.postSelectedHandler(product.id)}
  //     />;
  //   });
  //   // }

  //   return (
  //     <div>
  //       <Search search={this.handleInputChange} />
  //       {props.products.map((product) => {
  //         console.log(product);
  //         console.log(product.image);
  //         <Card title={product.title} />;
  //       })}
  //       ;
  //     </div>
  //   );
  // };

  // // <Aux>
  // {
  //   /* <Currency /> */
  // }
  // {
  //   /* <Search search={this.handleInputChange} /> */
  // }

  // // </Aux>

  // const formElementsArray = [];
  // for (let key in props.products) {
  //   formElementsArray.push({
  //     id: key,
  //     products: props.products[key],
  //   });
  // }

  // const fetchedProducts = [];
  // for (let key in props.products) {
  //   fetchedProducts.push({
  //     ...props.products[key],
  //     id: key,
  //   });
  // }
  // console.log("fetchedProducts", fetchedProducts);
  // console.log("props.products", props.products);
  // console.log(props.products);
  let products = <Spinner />;
  if (!props.loading) {
    //const firstItems = props.products.slice(0, 30);
    products = props.products.map((order) => (
      <Link to={"/product/" + order.id}>
        <Card
          key={order.id}
          title={order.productData.title}
          image={order.productData.image}
          favorite={order.productData.favorite}
          price={order.productData.price}
          author={order.productData.author}
        />
      </Link>
    ));
  }
  return (
    <Aux>
      <div className={classes.Prodact}>{products}</div>
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.product.products,
    loading: state.product.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProducts: () => dispatch(actions.fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(home);
