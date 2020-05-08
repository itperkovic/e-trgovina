import React from 'react';
//import styles from './Mobile.module.css';
import Items from '../Items/Items';

const Mobile = (props) => {
  return (
    <div>
        <Items items = {props.items}></Items>
    </div>
  );
};

export default Mobile;