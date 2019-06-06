import React, {Component} from 'react';
import {Row, Col, Button} from 'antd';
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


export default class Home extends Component {

    render(){
        return(
           <div style={container}>
               <Row style={row_style}>
                   <SearchBar/>
               </Row>
               <Row style={row_style}>
                   <Col span={18} >
                       <Map/>
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
