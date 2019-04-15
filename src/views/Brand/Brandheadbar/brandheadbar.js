import React, { Component } from 'react';

import './brandheadbar.scss'
class Brandheadbar extends Component {
    render() {
        return (
        <div className="barnd_head" id={this.props.isFixed?'barnd_head_fixed':''} ref="realBrandheadbar"> 
            <ul>
                <li onClick={()=>{
                    this.props.history.goBack()
                }}><span class="iconfont icon-zuojiantou"></span></li>
                <li>{this.props.isFixed?<span>{this.props.brandName?this.props.brandName:''}</span>:''}</li>
                <li><span class="iconfont icon-more"></span></li>
            </ul>
        </div>
        )
    }   
    componentDidMount(){
    }
}
export default Brandheadbar;
