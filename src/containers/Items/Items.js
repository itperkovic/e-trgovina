import React, { Component } from 'react';
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
    return (<div> {this.props.items.name} </div>)
    }
}
export default Items