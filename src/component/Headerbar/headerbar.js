import React from 'react'
import style from './headerbar.module.scss'
import { NavLink } from 'react-router-dom'


class Headerbar extends React.Component{
    constructor(){
        super()
        this.state = {
            isFixed: false,
        }
    }
    render(){
        return (
            <header className={this.state.isFixed?style.fixed:''}>
                <div className={style.index_head}>
                    <ul>
                        <li><NavLink to="/login"><span>登录</span></NavLink></li>
                        <li><a href="/login"><span className="iconfont icon-sousuo"></span><strong>Alexander McQueen 全场5折起</strong></a></li>
                        <li><a href="/list"><span className="iconfont icon-icon--"></span></a></li>
                    </ul>
                </div>
                <div className={style.index_nav}>
                    <ul>
                        <li><NavLink to="/home" activeClassName={style.active}>推荐</NavLink></li>
                        <li><NavLink to="/silo" activeClassName={style.active}>海外</NavLink></li>
                        <li><NavLink to="/women" activeClassName={style.active}>女士</NavLink></li>
                        <li><NavLink to="/men" activeClassName={style.active}>男士</NavLink></li>
                        <li><NavLink to="/cosmetics" activeClassName={style.active}>美妆</NavLink></li>
                        <li><NavLink to="/lifestyle" activeClassName={style.active}>家居</NavLink></li>
                        <li><NavLink to="/kids" activeClassName={style.active}>婴童</NavLink></li>
                        <li><NavLink to="/upcoming" activeClassName={style.active}>即将上新</NavLink></li>
                    </ul>
                </div>
            </header>
        )
    }
    componentDidMount(){
        window.onscroll = ()=>{
            if(document.documentElement.scrollTop || document.body.scrollTop > 0 ){            
                this.setState({
                    isFixed: true,
                })
            }else{              
                this.setState({
                    isFixed: false,
                })
            }
        }
    }
    componentWillUnmount(){
        window.onscroll = null;
        console.log('headerbar销毁了')
    }
}

export default Headerbar