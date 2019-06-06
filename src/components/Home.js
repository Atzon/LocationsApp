import React, {Component} from 'react';
import {Row, Col, Button} from 'antd';
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

const test_data =["1", "2", "3"];


class Home extends Component {

    constructor(props){
        super(props);
        this.addMarker = this.addMarker.bind(this);
    }

    addMarker(position){

        let marker = new window.google.maps.Marker({
            position: position.latLng.toJSON(),
            map: this.props.map,
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
                       <Locations locations={test_data}/>
                   </Col>
               </Row>
               <Row>
                   <Button onClick={() => {console.log('clicked')}}>Add locations to list</Button>
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