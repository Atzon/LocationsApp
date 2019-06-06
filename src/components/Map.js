import React, { Component } from 'react';
import {connect} from "react-redux";
import {setMap} from "../actions";


class Map extends Component {

    componentDidMount() {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 50.071085, lng: 19.9241442 },
            zoom: 18,
        });
        map.addListener('rightclick', this.props.onRightclick);
        this.props.setMap(map);
    }

    render() {
        return (
            <div style={{ height: "80vh" }} id={'map'} />
        );
    }
}

export default connect(null, {setMap})(Map);


