import React,{Component}from 'react';
import './detalshead.scss';


class DetalsHead extends Component{
    render(){
        return(
            <div className="flm_heads">
               <div className="flm_bp">
                 <a className="flm_fh" href="#"></a>
                 <span className="flm_topzi">餐桌配件精选</span>
                 <a className="flm_zy" href="#"></a>   
               </div>
               <ul className="flm_bootomzi">
                 <li><a>人气</a></li>
                 <li><a>折扣</a></li>
                 <li><a>价格<span></span></a></li>
                 <li><a>筛选</a></li>
               </ul>
            
            </div>
        )
    }
} 
export default DetalsHead;