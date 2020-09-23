import React from "react";
import styles from "./ItemsList.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const ItemsList = () => {
  const { items } = useSelector((state) => state.items);

  return (
    <div>
      {items.map((item, index) => (
        <NavLink
          to={`/Details/${item.id}`}
          key={item.id}
          index={index}
          items={items}
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
  );
};

export default ItemsList;

