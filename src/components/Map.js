import React, { Component } from 'react';

export default class Map extends Component {

    componentDidMount() {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 50.071085, lng: 19.9241442 },
            zoom: 18,
        });
    }

    render() {
        return (
            <div style={{ height: "80vh" }} id={'map'} />
        );
    }
}

