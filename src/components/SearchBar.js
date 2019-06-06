import React, { Component } from 'react';
import {Input} from 'antd';

export default class SearchBar extends Component {
    render() {
        return (
            <Input placeholder={"Location..."}/>
        );
    }
}

