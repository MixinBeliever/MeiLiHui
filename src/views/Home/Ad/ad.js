import React, { Component } from 'react';

import axios from 'axios'
import style from './ad.module.scss'

class Ad extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: {}
        }
    }
    render() {
        return (
        <div id={style.ad}>
            <a href={this.state.data.linkUrl}>
                <img src={this.state.data.img} alt=""/>
            </a>
        </div>
        )
    }
    componentDidMount(){
        axios({
            url: 'http://www.mei.com/appapi/home/newZoneEntrance/v3?credential='
        }).then(res=>{
            // console.log(res.data)
            this.setState({
                data: res.data,
            })
        })
    }
}

export default Ad;
