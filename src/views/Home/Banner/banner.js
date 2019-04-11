import React from 'react'

import Swiper from 'swiper'
//import 'swiper/dist/css/swiper/.css'
import './banner.scss'

class Banner extends React.Component{
    render(){
        return (
            <div>
                {console.log(this.props.banners)}
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        {
                            this.props.banners.map((item,index)=>
                                <div class="swiper-slide" data-hash="slide1" key={item.id}>
                                    <div className="my_banner">
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
    
}

export default Banner