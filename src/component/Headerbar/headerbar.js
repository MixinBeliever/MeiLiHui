import React from 'react'
import style from './headerbar.module.scss'
import { NavLink } from 'react-router-dom'


class Headerbar extends React.Component{
    render(){
        return (
            <header>
                <div className={style.index_head}>
                    <ul>
                        <li><span>登录</span></li>
                        <li><a href="/login"><span className="iconfont icon-sousuo"></span><strong>Alexander McQueen 全场5折起</strong></a></li>
                        <li><a href="/list"><span class="iconfont icon-icon--"></span></a></li>
                    </ul>
                </div>
                <div className={style.index_nav}>
                    <ul>
                        <li><NavLink to="/index" activeClassName={style.active}>推荐</NavLink></li>
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
}

export default Headerbar