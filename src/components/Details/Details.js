import React from 'react';
import styles from './Details.module.css';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from '../../redux/actions';
//import { bindActionCreators } from 'redux';
//import { connect } from 'react-redux';

const Details = (props) => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.items);
    const item = items.find((u) => u.id === parseInt(props.match.params.id));

    if (!item) return null;

    const handleAddToCart=()=>{
        dispatch(addToCart(item.id))
    };

    return (

        <div>


            <div className= {`${styles.name} ${styles.photo1}`}> <img src={item.img} width="170" height="150" alt="avatar" /> {item.name}</div>
            
            <div className= {styles.price}>Price: {item.price} kn</div>
            <div className= {styles.info}>Product description: {item.info}</div>

            <button className={styles.CartBtn} onClick={handleAddToCart} >Add to cart</button>

            <NavLink to="/" className={styles.link}>
            BACK
            </NavLink>

            </div>
    );
};
export default Details;