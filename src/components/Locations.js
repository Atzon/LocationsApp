import React, { Component } from 'react';
import {List} from 'antd';

export default class Locations extends Component {
    render() {
        return (
            <List
                style={{ height: "80vh" }}
                size="small"
                header={<div>Locations</div>}
                bordered
                dataSource={this.props.locations}
                renderItem={item => <List.Item>{item}</List.Item>}
            />

        );
    }
}

