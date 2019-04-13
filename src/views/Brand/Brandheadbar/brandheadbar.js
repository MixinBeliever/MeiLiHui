import React, { Component } from 'react';

import './brandheadbar.scss'
class Brandheadbar extends Component {
    render() {
        return (
        <div className={this.props.isFixed?'fixed':'barnd_head'}> 
            <ul>
                <li onClick={()=>{
                    this.props.history.goBack()
                }}><span class="iconfont icon-zuojiantou"></span></li>
                <li><span></span></li>
                <li><span class="iconfont icon-more"></span></li>
            </ul>
        </div>
        )
    }   
    componentDidMount(){
        window.onscroll = ()=>{
            console.log('aa')
            if((document.documentElement.scrollTop || document.body.scrollTop) > 50){
                console.log('固定')
                this.setState({
                    isFixed: true,
                })
            }else{
                console.log('不固定')
                this.setState({
                    isFixed: false,
                })
            }
        }
    }
}
export default Brandheadbar;
