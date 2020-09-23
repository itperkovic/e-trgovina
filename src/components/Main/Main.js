import React from 'react';
import styles from'./Main.module.css';
import Mobile from '../../containers/Mobile/Mobile';
import photo from '../Photo/kosarica.jpg'

const Main = (props) => {

    return(
<div>
    <div className={styles.photo1}> <img src={photo} alt="kosarica.jpg" /> </div>
    <Mobile items = {props.items}></Mobile>
      
</div>
    );

}
export default Main;

