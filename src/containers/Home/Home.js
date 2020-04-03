import React, { Component } from "react";
import axios from "../../axios-orders";
import classes from "./Home.css";
//import Prodacts from "../../components/Prodacts/Products";
import Card from "../../components/Card/Card";

class Home extends Component {
  state = {
    products: [],
    loading: true,
    selectedPostId: null,
    error: false
  };
  // const [productsState, setProductsState] = useState([]);
  // const [error, setError] = useState(false);
  // const [selectedPostId, setSelectedPostId] = useState(null);

  componentDidMount() {
    axios
      .get("https://marketplace-91001.firebaseio.com/product.json")
      .then((res) => {
        const fetchProduct = [];
        for (let key in res.data) {
          fetchProduct.push({
            ...res.data[key],
            id: key
          });
        }
        this.setState({ loading: false, products: fetchProduct });
        // console.log(response.data);
        // const productsData = response.data;
        // const res = Object.keys(productsData).map((name) => {
        //   var obj = {};
        //   obj[name] = productsData[name];
        //   return obj;
        // });
        // console.log(res);
        // const updateProducts = res.map((product) => {
        //   return {
        //     ...product
        //   };
        // });
        // this.setState({ products: updateProducts });
        // console.log(updateProducts);
      })
      .catch((error) => {
        // console.log(error);
        this.setState({ loading: false });
      });
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
    console.log("click favorite");
    const prodIndex = this.state.products.findIndex((p) => p.id === id);
    const newFavStatus = !this.state.products[prodIndex].favorite;
    const updatedProducts = [...this.state.products];
    console.log(this.state.products[prodIndex].favorite);
    updatedProducts[prodIndex] = {
      ...this.state.products[prodIndex],
      favorite: newFavStatus
    };
    return {
      ...this.state,
      products: updatedProducts
    };
  };

  render() {
    // let cards = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    // if (!this.state.error) {
    // cards = this.state.products.map((poroduct) => {
    //   return (
    //     <Card
    //       key={poroduct.id}
    //       title={poroduct.title}
    //       author={poroduct.author}
    //       clicked={() => this.postSelectedHandler(poroduct.id)}
    //     />
    //   );
    // });
    console.log(this.state.products);
    return (
      <div className={classes.Prodact}>
        {this.state.products.map((poroduct) => (
          <Card
            key={poroduct.id}
            title={poroduct.title}
            image={poroduct.image}
            price={poroduct.price}
            author={poroduct.author}
            clicked={() => this.postSelectedHandler(poroduct.id)}
          />
        ))}
      </div>
    );
  }
  // <Prodacts products={productsState} favoriteCliced={isFavoriteHandler} />
}

export default Home;
