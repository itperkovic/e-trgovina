import React from 'react';
//import styles from'./Main.module.css';
import Mobile from '../../containers/Mobile/Mobile';

const Main = (props) => {

    return(
<div>
      <Mobile items = {props.items}></Mobile>
</div>
    );

}
export default Main;

