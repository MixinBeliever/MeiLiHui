import React , {Component} from "react"
import style from './lifestyle.module.scss'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import GoTop from './../../component/GoTop/GoTop';
class Lifestyle extends Component {
    constructor (props) {
        super (props)
        this.state = {
            main_image1 : '',
            main_title1 : '',
            sub_title1 : '',
            description1 : '',
            main_image2 : '',
            main_title2 : '',
            sub_title2 : '',
            description2 : '',
            centerData : '',
            mainData : [], 
        }  
    }
    render () {
       return (
         <div>
            <header className={style.header}>     
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img src={this.state.main_image1} className={style.jpg}/> 
                        <div className={style.headertext}>
                            <p  className={style.headertext1}>{this.state.main_title1}</p>
                            <p  className={style.headertext2}>{this.state.sub_title1}</p>
                            <p  className={style.headertext2}>{this.state.description1}</p>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <img src={this.state.main_image2} className={style.jpg}/> 
                        <div className={style.headertext}>
                            <p  className={style.headertext1}>{this.state.main_title2}</p>
                            <p  className={style.headertext2}>{this.state.sub_title2}</p>
                            <p  className={style.headertext2}>{this.state.description2}</p>
                        </div>
                    </div>
                </div>
                <div className="swiper-scrollbar"></div>
            </div>
            </header>

            <img src={this.state.centerData} className={style.centerImg}/>
            <ul className={style.mainUl}>
                {
                    this.state.mainData.map(item => 
                        <li className={style.mainLi} onClick={this.handleMainLi.bind(this,item.eventId)}>
                            <div className={style.cc}></div>
                            <img src={item.imageUrl} className={style.mainImg}/> 
                            <div className={style.mainDiv}>
                                <p className={style.mainP}>{item.englishName}</p>
                                <p className={style.mainP}>{item.chineseName}</p>
                                <p className={style.mainP}>{item.discountText}</p>
                            </div> 
                        </li>     
                    )
                }
            </ul>
            <GoTop></GoTop>
         </div>
       )
    }
    componentDidMount () {
        fetch (`http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000004&platform_code=PLATEFORM_H5`).then(
            (res)=>res.json()).then((res)=>{
                console.log()
                this.setState({
                   main_image1 : res.banners[0].main_image,
                   main_title1 : res.banners[0].main_title,
                   sub_title1 : res.banners[0].sub_title,
                   description1 : res.banners[0].description,
                   main_image2 : res.banners[1].main_image,
                   main_title2 : res.banners[1].main_title,
                   sub_title2 : res.banners[1].sub_title,
                   description2 : res.banners[1].description
                })   
            })
        fetch (`http://www.mei.com/appapi/cms/cmsDetail/v3?silo=2013000100000000004&ids=2121000100000000291&timestamp=1554962667982&summary=72a0b04e0854f063fce6b4d4122bf0a3&platform_code=H5`).then(
            (res)=>res.json()).then((res)=>{
                console.log(res.resultList[0].data[0].imageUrl)
                this.setState({
                    centerData : res.resultList[0].data[0].imageUrl
                })   
            })
        fetch (`http://www.mei.com/appapi/silo/eventForH5?categoryId=lifestyle&pageIndex=1&timestamp=1554962667763&summary=631db88ee1f0f80f564ed5ea5c0a4553&platform_code=H5`).then(
            (res)=>res.json()).then((res)=>{
                this.setState({
                    mainData :res.eventList
                })   
            })
       new Swiper('.swiper-container', {
            autoplay: true,
            autoHeight: true,
            pagination : {
                el: '.swiper-pagination',
            }
        });
    }
    handleMainLi (id) {
        console.log(id)
        this.props.history.push(`/flmdetail2/${id}`)
    }
    
}
export default Lifestyle




