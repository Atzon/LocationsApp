import React, { Component } from 'react';
import {List} from 'antd';

export default class Locations extends Component {

    mapCoordsToString(marker){
        return `lg = ${marker.position.lng()} lt = ${marker.position.lat()}`;
    }
    
    render() {
        return (
            <List
                style={{ height: "80vh" }}
                size="small"
                header={<div>Locations</div>}
                bordered
                dataSource={this.props.locations.map(this.mapCoordsToString)}
                renderItem={item => <List.Item>{item}</List.Item>}
            />

        );
    }
}

