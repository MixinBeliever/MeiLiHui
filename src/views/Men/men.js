import React, { Component } from 'react';
import style from "./men.module.scss"
import { NavLink } from "react-router-dom"
class Men extends Component {
  constructor(props){
    super(props)
    this.state={
      main_image: '',
      main_title: '',
      sub_title :'',

      description :'',
      data:[],
      datalist:[]
    }
  }
  render() {
    return (
      <div id={style.handbag}>
          <div className={style.topHandbag}>
            <img src={this.state.main_image}/>
              <div>
                <p>{this.state.main_title}</p>
                <p>{this.state.sub_title}</p>
                <p>{this.state.description}</p>
              </div>

              {/* 衣服 */}

            <ul className={style.clothes}>
                {
                  this.state.data.map(item=>
                      <li><NavLink><img src={item.categoryImgStr} /></NavLink></li>
                    )
                }
            </ul>

          </div>


          {/*多个服装 */}
          
          {
            this.state.datalist.map(item=>
                <NavLink className={style.allClothing}>
                  <img src={item.imageUrl} />
                  <div>
                    <p>{item.englishName}</p>
                    <p>{item.chineseName}</p>
                    <p>{item.discountText}</p>
                  </div>
                </NavLink>
                
              )
          }
      </div>
    )
  }
  componentDidMount(){
      fetch('http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000002&platform_code=PLATEFORM_H5').then(res=>res.json()).then(res=>{
        this.setState({
          main_image:res.banners[0].main_image,
           main_title:res.banners[0].main_title,
           sub_title:res.banners[0].sub_title,
           description:res.banners[0].description
        })

      })

      fetch('http://www.mei.com/appapi/cms/cmsDetail/v3?silo=2013000100000000002&ids=2121000100000000234&timestamp=1554962673236&summary=6c55dcc8dff2d0d705082a7d6328acf1&platform_code=H5').then(res=>res.json()).then(res=>{
        this.setState({
          data:res.resultList[0].data
        })

      })


      fetch('http://www.mei.com/appapi/silo/eventForH5?categoryId=men&pageIndex=1&timestamp=1554962672932&summary=f1e19f34d4065fe31c544d38eedca39e&platform_code=H5').then(res=>res.json()).then(res=>{
        // console.log(res.eventList)
        this.setState({
            datalist:res.eventList
        })

      })

    }



}


export default Men;
