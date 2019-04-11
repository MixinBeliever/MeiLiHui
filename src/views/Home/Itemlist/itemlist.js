import React, { Component } from 'react';
import style from './itemlist.module.scss'
class Itemlist extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataarr: [] 
        }
    }
  render() {
    return (
      <section id={style.itemlist}>
          {
            //console.log(this.state.dataobj)
            this.state.dataobj?
                this.state.dataobj.map((item,index)=>
                    <div key={index} className={style.divblock}>
                        <h3>{item.name}</h3>
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
          
      </section>
    )
  }
  componentDidMount(){
      fetch('http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=1554946677285&summary=bc1042242d3a54d83ae0b6d59087a5f4&platform_code=H5').then(res=>res.json()).then(res=>{
          console.log(res)
          this.setState({
            dataobj: res.lists,
          })
      })
  }
}

export default Itemlist;
