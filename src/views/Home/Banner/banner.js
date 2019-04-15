import React from 'react'
import { Link, } from 'react-router-dom';

import Swiper from 'swiper'
//import 'swiper/dist/css/swiper/.css'
import './banner.scss'

class Banner extends React.Component{
    render(){
        return (
            <div>
                {/* {console.log(this.props.banners)} */}
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        {
                            this.props.banners.map((item,index)=>
                                <div class="swiper-slide" data-hash="slide1" key={item.id}>
                                    <div className="my_banner" onClick={()=>{
                                        this.handleClick(item.link_url)
                                    }}>
                                        <img className="main_img" src={item.main_image} alt=""/>
                                        <div className="title_pos">
                                            <h3 className="main_title">{item.main_title}</h3>
                                            <span className="sub_title">{item.sub_title}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        )
    }
    handleClick(id){
        console.log(id)
        var bannerId = id.split('/').pop()
        this.props.history.push(`/brand/${bannerId}`)
        //console.log(this.props)
    }
    
}

export default Banner