import React, { Component } from 'react';
import './App.css';
import axios from './axios-orders';
import Layout from './containers/Layout/Layout';

class App extends Component {
  state = {
    prodacts: [],
  }
  componentDidMount() {
    axios.get('https://marketplace-91001.firebaseio.com/products.json')
    .then( response => {
      const prodacts = response.data;
      const updateProdacts = prodacts.map(prodact => {
        return {
            ...prodact
        }
    })
    this.setState({prodacts: updateProdacts});
    })
    .catch( error => {
      // this.setState( { error: true } );
  } );;
  }
  render() {
    const prodactsRender = this.state.prodacts.map((data, idx) => {
      return (
      <div key={idx}>
          <img src={data.image}/>
         <p>{data.name}</p>
        <span>$ {data.price}</span>
      </div>
      )
  });
    return (
      <div className="App">
        {/* {prodactsRender} */}
        <Layout/>
      </div>
    );
  }
}

export default App;
