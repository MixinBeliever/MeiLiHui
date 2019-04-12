import React , {Component} from "react"
import style from './cosmetics.module.scss'
import GoTop from './../../component/GoTop/GoTop';
class Detail extends Component {
    constructor (props) {
        super (props)
        this.state = {
            main_image : '',
            main_title : '',
            sub_title : '',
            description : '',
            centerData : [],
            mainData : [], 
        }  
    }
    render () {
       return (
         <div  className={style.all}>
              <header className={style.header} >     
                <div>
                    <img src={this.state.main_image} className={style.jpg}/> 
                        <div className={style.headertext}>
                            <p  className={style.headertext1}>{this.state.main_title}</p>
                            <p  className={style.headertext2}>{this.state.sub_title}</p>
                            <p  className={style.headertext2}>{this.state.description}</p>
                        </div>
                </div>
            </header>
            <ul className={style.centerUl}>
                {
                    this.state.centerData.map(item => 
                        <li className={style.centerLi} key={item.siloId} >
                            <img src={item.categoryImgStr} className={style.centerImg} onClick={this.handleCenterLi.bind(this,item.categoryOneId)}/>  
                        </li>     
                    )
                }
            </ul>
            <ul className={style.mainUl} >
                {
                    this.state.mainData.map(item => 
                        <li className={style.mainLi} key={item.categoryId} onClick={this.handleMainLi.bind(this,item.eventId)} >
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
        fetch (`http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000003&platform_code=PLATEFORM_H5`).then(
            (res)=>res.json()).then((res)=>{
                this.setState({
                   main_image : res.banners[0].main_image,
                   main_title : res.banners[0].main_title,
                   sub_title : res.banners[0].sub_title,
                   description : res.banners[0].description
                })   
            })
        fetch (`http://www.mei.com/appapi/cms/cmsDetail/v3?silo=2013000100000000003&ids=2042000100000000431&timestamp=1554949812066&summary=0b6175c4d9035ec2577602b41744d92a&platform_code=H5`).then(
            (res)=>res.json()).then((res)=>{
                this.setState({
                    centerData : res.resultList[0].data
                })   
            })
        fetch (`http://www.mei.com/appapi/silo/eventForH5?categoryId=cosmetics&pageIndex=1&timestamp=1554951070301&summary=0d07067513d02b7e39f934a9ca88d376&platform_code=H5`).then(
            (res)=>res.json()).then((res)=>{
                console.log(res.eventList)
                this.setState({
                    mainData :res.eventList
                })   
            })

        var a = 1
        document.onscroll = () => {
            var scrollT = document.documentElement.scrollTop || document.body.scrollTop; 
            var scrollH = document.documentElement.scrollHeight || document.body.scrollHeight; 
            var clientH = document.documentElement.clientHeight || document.body.clientHeight; 
            if (scrollT === scrollH - clientH && a <= 3) {
                a ++
                fetch (`http://www.mei.com/appapi/silo/eventForH5?categoryId=cosmetics&pageIndex=${a}&timestamp=1554951070301&summary=0d07067513d02b7e39f934a9ca88d376&platform_code=H5`).then(
                (res)=>res.json()).then((res)=>{
                    var datalist = [...this.state.mainData].concat(res.eventList)
                    this.setState({
                        mainData :datalist
                    })   
                })
               
            } else if (scrollT < scrollH - clientH) {
                
            }
            console.log(scrollT)
       }
    }
    handleMainLi (id) {
        console.log(id)
        this.props.history.push(`/flmdetail2/${id}`)
    }
    handleCenterLi (id) {
        console.log(id)
    }
    componentWillUnmount () {
        console.log('cosme结束')
        document.onscroll = null
    }
}
export default Detail




