import React, { Component } from 'react';

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import './brandscroll.scss'

class Brandscroll extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="brandscroll_box">
        <h3 className="title">{this.props.ProductInfo}</h3>
          <div class="swiper-container">
            <div class="swiper-wrapper">
                {
                    (this.props.brandscroll.length != 0)?
                    this.props.brandscroll.map((item,index)=>
                        <div class="swiper-slide">
                            <div className="hook">
                                <img src={item.fileUrl} alt=""/>
                                <a href="/"></a>
                            </div>
                            <p className="item_info"><em>￥</em>{item.price}<span><em>￥</em>{item.marketPrice}</span></p>
                        </div>
                        
                    )
                    :
                    null
                }
            </div>
        </div>
      </div>
    )
  }
  componentDidUpdate(){
      
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 2.5,
        spaceBetween: 10,
        freeMode: true,
    });
  }
}

export default Brandscroll;