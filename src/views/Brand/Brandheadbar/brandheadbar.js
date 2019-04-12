import React, { Component } from 'react';

import './brandheadbar.scss'
class Brandheadbar extends Component {
    render() {
        return (
        <div id="barnd_head"> 
            <ul>
                <li><span class="iconfont icon-zuojiantou"></span></li>
                <li><span></span></li>
                <li><span class="iconfont icon-more"></span></li>
            </ul>
        </div>
        )
    }   
}

export default Brandheadbar;
