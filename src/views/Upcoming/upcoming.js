import React, { Component } from 'react';
import './upcoming.scss';
import Footer from '../../component/Footer/footer'

class Upcoming extends Component {
  constructor(props){
    super(props);
    this.state={
      datalist :[],
      text : ''
    };
  }

  componentDidMount(){
    fetch(`http://www.mei.com/appapi/upcoming/index/v3?platform_code=H5&timestamp=1554953834134&summary=95040df8412c916405e37017b485613c`).then(res=>res.json()).then(res=>{
      console.log(res.lists[0].events)
      console.log(res.tips)
      this.setState({
        datalist: res.lists[0].events,
        text: res.tips
      })
    })
  }
  render() {
    return (
          
      <div className="flm_hand"> 
        <div className="flm_hand-top" >
          <h2 className="flm_sz">距离开场还剩<span>23</span>小时</h2>
          <p className="flm_dy">{this.state.text}</p>
        </div>
         {
           this.state.datalist.map(item=>

             <div key={item} onClick={this.handClick.bind(this, item.eventId)}>
               <div className="flm_tu">
                 <img className="flm_upimg" src={item.imgUrl} />
                 <div className="flm_zzc"></div>
                 <ul className="flm_zi">
                   <li className="flm_brand">{item.englishName}</li>
                   <li className="flm_zc">{item.chineseName}</li>
                   <li className="flm_fold">{item.discount}<span>开售提醒</span></li>
                 </ul>
               </div>

            </div>
            )
         }  
         <Footer></Footer>
 
      </div>
    )
  }
  handClick(id){
    console.log(this.props);
    this.props.history.push(`/flmdetail/${id}`)
  }
}

export default Upcoming;
