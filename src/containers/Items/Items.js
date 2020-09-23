import React, { Component } from 'react';
import styles from './Items.module.css';
//import { bindActionCreators } from 'redux';
//import { connect } from 'react-redux';

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
    }
    render() {
    return (
    <div> 
        {""} 
        <ItemDetails {...this.props}></ItemDetails>{""}
        </div>
        );
    }
}
const ItemDetails = (props) => {
    return (
        <>
        <div>
            {props.items.map((itemDetail, index) => (
            <div key={index}>
            <div className= {`${styles.name} ${styles.photo1}`}> <img src={itemDetail.img} width="170" height="150" alt="avatar" /> {itemDetail.name}</div>
            
            <div className= {styles.price}> {itemDetail.price}</div>
            </div>
            ))}
        </div>
        </>
    );
};
export default Items;