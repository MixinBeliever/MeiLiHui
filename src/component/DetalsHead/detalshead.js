import React,{Component}from 'react';
import './detalshead.scss';
import creatHistory from 'history/createBrowserHistory' 
class DetalsHead extends Component{
    render(){
        return(
            <div className="flm_heads">
               <div className="flm_bp">
                 <a className="flm_fh" onClick={this.back.bind(this)} >
                    <span class="iconfont icon-zuojiantou">返回</span>
                 </a>
                 <span className="flm_topzi">{this.props.topList}</span>
                 <a className="flm_zy" href="http://localhost:3000/home">
                  <span class="iconfont icon-more">首页</span>
                 </a>   
               </div>
               <ul className="flm_bootomzi">
                 <li className="flm_r"><a>人气</a></li>
                 <li className="flm_z"><a>折扣</a></li>
                 <li className="flm_j"><a>价格<span></span></a></li>
                 <li className="flm_s"><a>筛选</a></li>
               </ul>
               {
                  this.props.topList2? 
                  <div className="flm_mz">
                      <span className="flm_mz2">满折</span>
                      {this.props.topList2}
                  </div>
                  : null

               }
              
            </div>
           
        )
      
    }
      back () {
          const history = creatHistory();
            console.log(history)
history.goBack();
        }
} 
export default DetalsHead;