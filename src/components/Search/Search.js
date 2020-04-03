import React, { Component } from "react";
import axios from "axios";

import classes from "./Search.css";

import Button from "../UI/Button/Button";

class Search extends Component {
  state = {
    query: "",
    // queryLocation: ""
    data: [],
    filteredData: []
  };

  handleInputChange = (event) => {
    const query = event.target.value;

    this.setState((prevState) => {
      const filteredData = prevState.data.filter((element) => {
        console.log(element.title.toLowerCase());
        return element.title.toLowerCase().includes(query.toLowerCase());
      });

      return {
        query,
        filteredData
      };
    });
  };

  // handleInputChange = () => {
  //   this.setState({
  //     querySearch: this.search.value
  //   }),
  //     () => {
  //       if (this.state.query && this.state.query.length > 1) {
  //         if (this.state.query.length % 2 === 0) {
  //         }
  //       }
  //     };
  //   // this.setState({
  //   //   queryLocation: this.searchLoc.value
  //   // });
  // };

  // getData = () => {
  //   fetch(`https://marketplace-91001.firebaseio.com/product.json`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const { query } = this.state;
  //       const filteredData = data.filter((element) => {
  //         return element.name.toLowerCase().includes(query.toLowerCase());
  //       });

  //       this.setState({
  //         data,
  //         filteredData
  //       });
  //     });
  //};

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
          console.log(this.state.data);
        }
      });
  };

  render() {
    return (
      <div className={classes.Search}>
        <input
          className={classes.SearchInput}
          type="text"
          placeholder="Search products by name"
          // ref={(input) => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <input
          className={classes.Location}
          type="text"
          placeholder="Location"
          // ref={(input) => (this.searchLoc = input)}
          // onChange={this.handleInputChange}
        />
        <Button btnType="Search">Search</Button>
        <p>{this.state.query}</p>

        <div>
          {this.state.filteredData.map((i) => (
            <p>{i.title}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
