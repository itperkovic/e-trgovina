import React from 'react';
//import styles from './Home.module.css';
import Main from '../Main/Main';

const Home = (props) => {
  return (
    <div>
      <Main items = {props.items}></Main>
    </div>
  );
};

export default Home;