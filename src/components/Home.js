import React, {Component} from 'react';
import {Row, Col, Button, Modal} from 'antd';
import {connect} from "react-redux";
import Map from './Map';
import Locations from './Locations';
import SearchBar from './SearchBar';

import 'antd/dist/antd.css';


const container = {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 50px 0 50px'
};

const row_style ={
    padding: "5px"
};

const info = () => {
    Modal.info({
            title: 'How to',
            content: (
                <div>
                    <p>Right click on the map to add new marker</p>
                    <p>When all points are ready click the button at the bottom to add all markers to the list</p>
                </div>
),
    onOk() {},
});
}


class Home extends Component {

    constructor(props){
        super(props);
        info();
        this.state={
            markers: [],
            locations: []
        }
        this.addMarker = this.addMarker.bind(this);
        this.addLocations = this.addLocations.bind(this);
    }

    addMarker(position){

        let marker = new window.google.maps.Marker({
            position: position.latLng.toJSON(),
            map: this.props.map,
        });

        this.setState({
            markers: [...this.state.markers, marker]
        })
    }

    addLocations(){
        let markers = this.state.markers;

        this.setState({
            locations: markers,
            markers: [],
        });

        markers.forEach(marker =>{
            marker.setMap(null);
        });
    }

    render(){
        return(
           <div style={container}>
               <Row style={row_style}>
                   <SearchBar/>
               </Row>
               <Row style={row_style}>
                   <Col span={18} >
                       <Map onRightclick={this.addMarker}/>
                   </Col>
                   <Col span={6}>
                       <Locations locations={this.state.locations}/>
                   </Col>
               </Row>
               <Row>
                   <Button onClick={this.addLocations}>Add locations to list</Button>
               </Row>
          </div>
        );
    }
}


function mapStateToProps(state){
    return{
        map: state.map
    };
}

export default connect(mapStateToProps, {})(Home);