import React, { Component } from 'react';
import store from '../../store/store'
import { hideHeaderbar,showHeaderbar } from '../ActionDispatch/actionCreator'
import Brandheadbar from './Brandheadbar/brandheadbar';
import './brand.scss'
import Brandscroll from './Brandscroll/brandscroll';
class Brand extends Component {
    constructor(props){
        super(props)
        this.state = {
            bannerinfo: null,
            p_more: false,
            isFixed:false,
        }
    }
    render() {
        return (
        <div>
            <Brandheadbar brandName={this.state.bannerinfo!==null?this.state.bannerinfo.body.brandDetail.brandName:''} {...this.props} isFixed={this.state.isFixed} ref="myBrandheadbar"></Brandheadbar>
            {
                (this.state.bannerinfo !== null)?
                
                    <div id="banner_head">
                        <div className="banner_top" ref="mybanner">
                            <img src={this.state.bannerinfo.body.brandDetail.brandPageImage} alt=""/>
                            <p>{this.state.bannerinfo.body.brandDetail.brandName}</p>
                            <a href="/" className="a_follow">+关注</a>
                        </div>
                        <div className="banner_dowm">
                            <h3>在售商品<strong>{this.state.onSaleTotal}</strong>件 上新<span>{this.state.newTotal}</span>件</h3>
                            <p className={this.state.p_more?'p_more':'close'}>{this.state.bannerinfo.body.brandDetail.brandStoryText}</p>
                            {
                                this.state.p_more?
                                <div><span className="more" onClick={()=>{
                                    this.setState({
                                        p_more: false,
                                    })
                                }}>收起</span></div>
                                :
                                <div><span className="more" onClick={()=>{
                                    this.setState({
                                        p_more: true,
                                    })
                                }}>更多</span></div>
                                
                            }
                           
                        </div>
                    </div>
                :null
            }
            <Brandscroll ProductInfo={'精选上新'} brandscroll={this.state.bannerinfo?this.state.bannerinfo.body.newProductTop10:[]} ></Brandscroll> 
            <Brandscroll ProductInfo={'人气热销'} brandscroll={this.state.bannerinfo?this.state.bannerinfo.body.hotProductTop10:[]} ></Brandscroll> 
        </div>
        )
    }  
    //在componentWillReceiveProps中更好传递属性  
    componentWillMount(){
    }


    componentDidMount(){
        //隐藏headerbar
        store.dispatch(hideHeaderbar())

        fetch(`http://www.mei.com/appapi/brand/product/hotNew/v3?logoId=${this.props.match.params.brandId}`).then(res=>res.json()).then(res=>{
            console.log(res)
            
            this.setState({
                bannerinfo: res,
                onSaleTotal: res.body.onSaleTotal,
                newTotal: res.body.newTotal,
            },()=>{
                console.log(this.refs.myBrandheadbar.refs.realBrandheadbar.offsetHeight)
                document.onscroll = ()=>{
                    if((document.documentElement.scrollTop || document.body.scrollTop) > this.refs.mybanner.offsetHeight){
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
            })
        })
    }
    componentWillUnmount(){
        //显示headerbar
        store.dispatch(showHeaderbar())
        document.onscroll = null;
    }
}

export default Brand;
