import React, { Component } from 'react';
import {Input} from 'antd';
import {connect} from "react-redux";

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
    }

    handlePlaceSelect() {
        let place = this.autocomplete.getPlace();
        if (place.geometry) {
            this.props.map.setCenter(place.geometry.location);
            this.props.map.setZoom(13);
        }
    }

    componentDidMount() {
        this.autocomplete = new window.google.maps.places.Autocomplete(
            document.getElementById('autocomplete'));
        this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
    }

    render() {
        return (
            <Input id="autocomplete" className="controls" type="text" placeholder="Location..."/>
     );
    }
}

function mapStateToProps(state){
    return{
        map: state.map
    };
}

export default connect(mapStateToProps, {})(SearchBar);

