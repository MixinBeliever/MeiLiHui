import React,{Component}from 'react';
import './flmdetail2.scss';
import store from '../../store/store'
import { showHeaderbar, hideHeaderbar } from '../Login/actionCreator'

class FlmDetail2 extends Component{

    constructor(props){
        super(props);
        this.state ={
            detailInfo: [],
            isShow:true,
        };
    }

    componentDidMount(){
        console.log(this.props.match.params.id);
           store.dispatch(hideHeaderbar())
        fetch(`http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=${this.props.match.params.id}&key=&sort=&timestamp=1554970706803&summary=18f372f3696d6e7a4acf52f10ef3943a&platform_code=H5`).then(res=>res.json()).then(res=>{
            console.log(res.products);
         this.setState({
             detailInfo: res.products
         })
        })
    }
    render(){
        return(
            <div className="flm_qb">
                <div className="flm_headle">
                
                </div>
            {
                this.state.detailInfo.map(item=>
                        <div className="flm_nr">
                        <img src={item.imageUrl}></img>
                        {
                            item.tagListDto.length !==0 ?
                                <span className="flm_tj">{item.tagListDto[0].tag}</span>
                            :
                            null
                        }
                        
                        <h3>{item.brandName}</h3>
                        <p className="flm_cp">{item.productName}</p>
                        <div className="flm_jg1">￥{item.price}</div>
                        <div className="flm_jg2">￥{item.marketPrice}</div>
                        <span className="flm_dz">{item.discount}折</span>
                        </div>
                    
                    )

            }    
            </div>
        )
    }
   
    componentWillUnmount() {
        //显示headerbar
        store.dispatch(showHeaderbar())
    }
}
export default FlmDetail2;