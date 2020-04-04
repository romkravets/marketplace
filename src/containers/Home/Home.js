import React, { Component } from "react";
import axios from "../../axios-orders";
import classes from "./Home.css";
//import Prodacts from "../../components/Prodacts/Products";
import Card from "../../components/Card/Card";
//import Currency from "../../components/Currency/Currency";
import Search from "../../components/Search/Search";
import Aux from "../../hoc/Auxiliary/Auxiliary";

class Home extends Component {
  state = {
    products: [],
    loading: true,
    selectedPostId: null,
    //error: false,
    query: "",
    filteredData: [],
    queryError: true
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
        this.setState({ queryError: true });
      })
      .catch((error) => {
        // console.log(error);
        this.setState({ loading: false });
      });
  }

  handleInputChange = (event) => {
    const query = event.target.value;

    this.setState((prevState) => {
      const filteredData = prevState.data.filter((element) => {
        return element.title.toLowerCase().includes(query.toLowerCase());
      });

      return {
        query,
        filteredData
      };
    });
    this.setState({ queryError: false });
    // if (this.state.query === "" || this.state.query.length > 1) {
    //   // if (this.state.query.length % 2 === 0) {
    //   return this.setState({ filteredData: [] });
    //   // }
    // }
  };

  componentWillMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get("https://marketplace-91001.firebaseio.com/product.json")
      .then((res) => {
        const fetchProduct = [];
        for (let key in res.data) {
          fetchProduct.push({
            ...res.data[key],
            id: key
          });
          const { query } = this.state;
          const filteredData = fetchProduct.filter((element) => {
            return element.title.toLowerCase().includes(query.toLowerCase());
          });
          this.setState({ loading: false, data: filteredData });
          // console.log(this.state.data);
        }
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  postSelectedHandler = (id) => {
    const prodIndex = this.state.products.findIndex((p) => p.id === id);
    console.log(this.state.products[prodIndex].favorite);
    console.log("prodIndex", prodIndex);
    const newFavStatus = !this.state.products[prodIndex].favorite;
    console.log("newFavStatus", newFavStatus);
    const updatedProducts = [...this.state.products];
    updatedProducts[prodIndex] = {
      ...this.state.products[prodIndex],
      favorite: newFavStatus
    };
    console.log(updatedProducts);
    return {
      ...this.state,
      products: updatedProducts
    };
  };

  render() {
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
    // console.log(this.state.products);
    let block = null;
    block = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.loading && this.state.queryError) {
      block = (
        <div className={classes.Prodact}>
          {this.state.products.map((poroduct) => (
            <Card
              key={poroduct.id}
              title={poroduct.title}
              image={poroduct.image}
              favorite={poroduct.favorite}
              price={poroduct.price}
              author={poroduct.author}
              clicked={() => this.postSelectedHandler(poroduct.id)}
            />
          ))}
        </div>
      );
    }

    if (!this.state.queryError) {
      block = (
        <div className={classes.Prodact}>
          {this.state.filteredData.map((i) => (
            <Card
              key={i.id}
              title={i.title}
              image={i.image}
              price={i.price}
              author={i.author}
              // clicked={() => this.postSelectedHandler(i.id)}
            />
          ))}
        </div>
      );
    }

    return (
      <Aux>
        {/* <Currency /> */}
        <Search search={this.handleInputChange} />
        {block}
      </Aux>
    );
  }
}

export default Home;
