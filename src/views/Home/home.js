import React from 'react'

import Banner from './Banner/banner'
import Ad from './Ad/ad'
import Everydaynews from './Everydaynews/everydaynews';
import Itemlist from './Itemlist/itemlist';
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            bannerlist: [],
        }
    }
    render(){
        return (
            <div>
                <Banner banners={this.state.bannerlist} {...this.props}></Banner>
                <Ad></Ad>
                <Everydaynews></Everydaynews>
                <Itemlist></Itemlist>
            </div>
        )
    }
    componentDidMount(){

        fetch('http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000008&platform_code=PLATEFORM_H5').then(res=>res.json()).then(res=>{
            console.log(res)
            this.setState({
                bannerlist: res.banners,
            })
        })

       
    }
}

export default Home