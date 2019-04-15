import React, { Component } from 'react';
import style from './itemlist.module.scss'
//import ReactDOM from 'react-dom'

import { PullToRefresh,} from 'antd-mobile';

class Itemlist extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataarr: [],
            refreshing: false,
            height: document.documentElement.clientHeight,
        }
    }
  render() {
    return (
      <section id={style.itemlist}>
            <PullToRefresh
                damping={150}
                ref={el => this.ptr = el}
                style={{                      //底部样式
                    height: this.state.height,
                    overflow: 'auto',
                    fontSize: '14px',
                }}
                indicator={{ activate: '加载..', deactivate: '上拉刷新', release: '正在加载中...'}}
                //activate: 拉动, deactivate: 滑到底部的显示, release: 拉完之后的显示 finish: 结束语
                direction={'up'} //拉动方向
                refreshing={this.state.refreshing} //是否显示刷新状态
                onRefresh={() => {
                    this.setState({ refreshing: true }); 

                    setTimeout(() => {
                        this.setState({ 
                            refreshing: false,
                            dataarr: [...this.state.dataarr,...this.state.dataarr]
                        });
                    }, 1000);
                }}>
                {
                    //console.log(this.state.dataobj)
                    this.state.dataarr?
                        this.state.dataarr.map((item,index)=>
                            <div key={index} className={style.divblock}>
                                <h3>
                                    {item.name}                           
                                </h3>
                                <ul>
                                    {
                                        item.events.map((data,index)=>
                                            <li key={data.eventId}>
                                                <img src={data.imageUrl} alt=""/>
                                                <div className={style.over_pos}>
                                                    <p className={style.englishName}>{data.englishName}</p>
                                                    <p className={style.chineseName}>{data.chineseName}</p>
                                                    <p className={style.discountText}>{data.discountText}</p>
                                                </div>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        )
                    :
                    null
                }
            </PullToRefresh>

          
          
      </section>
    )
  }
  componentDidMount(){
        const hei = this.state.height ;
        fetch('http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=1554946677285&summary=bc1042242d3a54d83ae0b6d59087a5f4&platform_code=H5').then(res=>res.json()).then(res=>{
            //console.log(res)
            this.setState({
                height: hei,
                dataarr: res.lists,
            })
        })
  }
}

export default Itemlist;
