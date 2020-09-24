import React, { Component } from "react";
import ScrollBack from "../ScrollBack/ScrollBack";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home/Home";
import styles from "./App.module.css";
import About from "../About/About";
import Cart from "../Cart/Cart";
import { connect } from "react-redux";
import { getItems } from "../../services";
import { addItems } from "../../redux/actions";
import Details from "../Details/Details";


class App extends Component {
  fetchData = async () => {
    const { dispatch } = this.props;
    const json = await getItems();
    dispatch(addItems(json));
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <Router>
        <div className={styles.container}>
          <Header />
          <div className={styles.containerFlex}>
            <Route
              exact
              path="/"
              render={() => (
                <div className={styles.containerFlex}>
                  <Home items={this.props.items}>
                  </Home>
                </div>
              )}
            />
            <Route exact path="/Cart" render={() => (
                <div>
                  <Cart cartItems={this.props.cartItems}>
                  </Cart>
                </div>
              )} />
            <Route path="/about" component={About} />
            <Route path="/Details/:id" component={Details} />
          </div>
          <Footer></Footer>
          <ScrollBack></ScrollBack>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items.items,
    cartItems: state.items.cartItems
  };
}

export default connect(mapStateToProps)(App);