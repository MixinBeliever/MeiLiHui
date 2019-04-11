import React, { Component } from 'react';

import axios from 'axios'
import style from './everydaynews.module.scss'

class Everydaynews extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataobj: {}
        }
    }
    render() {
        return (
        <div id={style.everydaynews}>
            <ul>
                {
                    //console.log(dataobj)
                    this.state.dataobj.show2?
                    this.state.dataobj.show2.map((item,index)=>
                        <li key={item.id}>
                            <a href={item.go_url}>
                                <h3>{item.main_title}<span>{item.sub_title}</span></h3>
                                <div className={style.imgarea}>
                                    {
                                        item.products.map((data,index)=>
                                            <div key={data.glsCode}>
                                                <img src={data.picUrl} alt=""/>
                                                <span className={style.tag}>{data.tag}</span>
                                            </div>
                                        )
                                    }
                                    
                                </div>
                            </a>
                        </li>
                    )
                    :
                    null
                }
               
            </ul>
        </div>
        )
    }
    componentDidMount(){
        axios({
            url: 'http://www.mei.com/appapi/ninenew/operational/v1?credential='
        }).then(res=>{
            console.log(res.data)
            this.setState({
                dataobj: res.data,
            })
        })
    }
}

export default Everydaynews;
