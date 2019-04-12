import React, { Component } from 'react';
import store from '../../store/store'
import { hideHeaderbar,showHeaderbar } from '../ActionDispatch/actionCreator'
import Brandheadbar from './Brandheadbar/brandheadbar';
import './brand.scss'
class Brand extends Component {
    constructor(props){
        super(props)
        this.state = {
            bannerinfo: {}   
        }
    }
    render() {
        return (
        <div>
            {typeof this.state.bannerinfo.brandName}
            <Brandheadbar bannerinfo={this.state.bannerinfo}></Brandheadbar>
            {
                this.state.bannerinfo?
                    <div id="banner_head">
                        <div className="banner_top">
                            <img src={this.state.bannerinfo.brandPageImage}/>
                            <p>{this.Toupper()}</p>
                        </div>
                        <div></div>
                    </div>
                :
                null
            }
            
            <div>

            </div>
        </div>
        )
    }  
    //在componentWillReceiveProps中更好传递属性
    componentDidUpdate(){
        console.log('7777777'+this.state.bannerinfo.brandName)
        this.setState()
    }

    Toupper(str){
        
        // if(this.state.bannerinfo !== null){
        //     console.log(this)
        //     return this.state.bannerinfo.brandName.toUpperCase()
        // }else{
            return ''
        //}
        
    } 
    componentDidMount(){
        //隐藏headerbar
        store.dispatch(hideHeaderbar())

        fetch('http://www.mei.com/appapi/brand/viewCms/v3?logoId=3616200100000000853').then(res=>res.json()).then(res=>{
            console.log(res.body)
            this.setState({
                bannerinfo: res.body.brandDetail,
            })
        })
    }
    componentWillUnmount(){
        //显示headerbar
        store.dispatch(showHeaderbar())
    }
}

export default Brand;
