import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './Cart.module.css';

const Cart = (props) => {
  //const { items } = useSelector((state) => state.items.items.cartItems);
  console.log(props.cartItems);
    return (
      <div className={styles.container}>
        <h2>Cart</h2>
        <div>
      {props.cartItems.map((item, index) => (
        <NavLink
          to={`/Details/${item.id}`}
          key={item.id}
          index={index}
          items={props.cartItems}
          className={styles.ItemsList}
        >
          {" "}
          -{item.name}
          <img src={item.img} width="170" height="150" alt="avatar" />
          {item.price}
          <br></br>{" "}
        </NavLink>
      ))}
    </div>
      </div>
    );
  };
  
  export default Cart;
  