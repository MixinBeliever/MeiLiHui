import React, { Component } from 'react';
import style from "./women.module.scss"
import { NavLink } from "react-router-dom"
class Women extends Component {
  constructor(props){
    super(props)
    this.state={
      link_url :'',
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
            <img src={this.state.main_image} alt=""/>
              <div>
                <p>{this.state.main_title}</p>
                <p>{this.state.sub_title}</p>
                <p>{this.state.description}</p>
              </div>

              {/* 衣服 */}

            <ul className={style.clothes}>
                {
                  this.state.data.map(item=>
                      <li><NavLink><img src={item.categoryImgStr} alt="" /></NavLink></li>
                    )
                }
            </ul>

          </div>


          {/*多个服装 */}
          
          {
            this.state.datalist.map(item=>
                <NavLink className={style.allClothing} onClick={this.handleMainLi.bind(this,item.eventId)}>
                  <img src={item.imageUrl}  alt=""/>
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
      fetch('http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000001&platform_code=PLATEFORM_H5').then(res=>res.json()).then(res=>{
        console.log(res.banners[0])
        this.setState({
          main_image:res.banners[0].main_image,
           main_title:res.banners[0].main_title,
           sub_title:res.banners[0].sub_title,
           description:res.banners[0].description,
           link_url : res.banners[0].link_url
        })

      })

      fetch('http://www.mei.com/appapi/cms/cmsDetail/v3?silo=2013000100000000001&ids=2120000100000000276&timestamp=1554950313422&summary=366384e8eec925b7e85e16424018cbbd&platform_code=H5').then(res=>res.json()).then(res=>{
        this.setState({
          data:res.resultList[0].data
        })

      })


      fetch('http://www.mei.com/appapi/silo/eventForH5?categoryId=women&pageIndex=1&timestamp=1554950312880&summary=f7f0b5e9a8b2fc894d31cbed6b383310&platform_code=H5').then(res=>res.json()).then(res=>{
        console.log(res.eventList)
        this.setState({
            datalist:res.eventList
        })

      })
    }
    handleMainLi (id) {
      console.log(id)
      this.props.history.push(`/flmdetail2/${id}`)
  }
    
   
}


export default Women;
